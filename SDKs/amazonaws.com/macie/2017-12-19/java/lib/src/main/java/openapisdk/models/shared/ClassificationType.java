package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClassificationType
 * The classification type that Amazon Macie Classic applies to the associated S3 resources. 
**/
public class ClassificationType {
    @JsonProperty("continuous")
    public S3ContinuousClassificationTypeEnum continuous;
    public ClassificationType withContinuous(S3ContinuousClassificationTypeEnum continuous) {
        this.continuous = continuous;
        return this;
    }
    @JsonProperty("oneTime")
    public S3OneTimeClassificationTypeEnum oneTime;
    public ClassificationType withOneTime(S3OneTimeClassificationTypeEnum oneTime) {
        this.oneTime = oneTime;
        return this;
    }
}