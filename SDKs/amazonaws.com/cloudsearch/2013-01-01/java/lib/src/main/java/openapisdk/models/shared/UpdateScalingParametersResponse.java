package openapisdk.models.shared;



/**
 * UpdateScalingParametersResponse
 * The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
**/
public class UpdateScalingParametersResponse {
    public ScalingParametersStatus scalingParameters;
    public UpdateScalingParametersResponse withScalingParameters(ScalingParametersStatus scalingParameters) {
        this.scalingParameters = scalingParameters;
        return this;
    }
}