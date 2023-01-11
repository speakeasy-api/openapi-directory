package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AttackVectorDescription
 * Describes the attack.
**/
public class AttackVectorDescription {
    @JsonProperty("VectorType")
    public String vectorType;
    public AttackVectorDescription withVectorType(String vectorType) {
        this.vectorType = vectorType;
        return this;
    }
}