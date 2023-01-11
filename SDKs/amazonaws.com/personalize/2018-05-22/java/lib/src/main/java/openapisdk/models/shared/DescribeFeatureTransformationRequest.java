package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFeatureTransformationRequest {
    @JsonProperty("featureTransformationArn")
    public String featureTransformationArn;
    public DescribeFeatureTransformationRequest withFeatureTransformationArn(String featureTransformationArn) {
        this.featureTransformationArn = featureTransformationArn;
        return this;
    }
}