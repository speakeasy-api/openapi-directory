package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityLabel
 * Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
**/
public class EntityLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public PiiEntityTypeEnum name;
    public EntityLabel withName(PiiEntityTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public EntityLabel withScore(Float score) {
        this.score = score;
        return this;
    }
}