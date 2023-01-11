package openapisdk.models.shared;



/**
 * ScalingParametersStatus
 * The status and configuration of a search domain's scaling parameters. 
**/
public class ScalingParametersStatus {
    public ScalingParameters options;
    public ScalingParametersStatus withOptions(ScalingParameters options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public ScalingParametersStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}