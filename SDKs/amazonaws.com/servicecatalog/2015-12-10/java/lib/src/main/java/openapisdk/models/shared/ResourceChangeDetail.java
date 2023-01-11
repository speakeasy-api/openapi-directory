package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceChangeDetail
 * Information about a change to a resource attribute.
**/
public class ResourceChangeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CausingEntity")
    public String causingEntity;
    public ResourceChangeDetail withCausingEntity(String causingEntity) {
        this.causingEntity = causingEntity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Evaluation")
    public EvaluationTypeEnum evaluation;
    public ResourceChangeDetail withEvaluation(EvaluationTypeEnum evaluation) {
        this.evaluation = evaluation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public ResourceTargetDefinition target;
    public ResourceChangeDetail withTarget(ResourceTargetDefinition target) {
        this.target = target;
        return this;
    }
}