package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationTypeUpdate
 * The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
**/
public class ClassificationTypeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuous")
    public S3ContinuousClassificationTypeEnum continuous;
    public ClassificationTypeUpdate withContinuous(S3ContinuousClassificationTypeEnum continuous) {
        this.continuous = continuous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTime")
    public S3OneTimeClassificationTypeEnum oneTime;
    public ClassificationTypeUpdate withOneTime(S3OneTimeClassificationTypeEnum oneTime) {
        this.oneTime = oneTime;
        return this;
    }
}