package openapisdk.models.shared;



/**
 * DescribeScalingParametersResponse
 * The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
**/
public class DescribeScalingParametersResponse {
    public ScalingParametersStatus scalingParameters;
    public DescribeScalingParametersResponse withScalingParameters(ScalingParametersStatus scalingParameters) {
        this.scalingParameters = scalingParameters;
        return this;
    }
}