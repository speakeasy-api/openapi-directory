package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFeatureTransformationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureTransformation")
    public FeatureTransformation featureTransformation;
    public DescribeFeatureTransformationResponse withFeatureTransformation(FeatureTransformation featureTransformation) {
        this.featureTransformation = featureTransformation;
        return this;
    }
}