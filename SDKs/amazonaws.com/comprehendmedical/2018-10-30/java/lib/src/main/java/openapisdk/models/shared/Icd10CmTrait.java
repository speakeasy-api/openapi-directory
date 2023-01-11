package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Icd10CmTrait
 * Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
**/
public class Icd10CmTrait {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public Icd10CmTraitNameEnum name;
    public Icd10CmTrait withName(Icd10CmTraitNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Icd10CmTrait withScore(Float score) {
        this.score = score;
        return this;
    }
}