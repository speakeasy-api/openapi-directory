package openapisdk.models.shared;



/**
 * ClusterParameterStatus
 * Describes the status of a parameter group.
**/
public class ClusterParameterStatus {
    public String parameterApplyErrorDescription;
    public ClusterParameterStatus withParameterApplyErrorDescription(String parameterApplyErrorDescription) {
        this.parameterApplyErrorDescription = parameterApplyErrorDescription;
        return this;
    }
    public String parameterApplyStatus;
    public ClusterParameterStatus withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
    public String parameterName;
    public ClusterParameterStatus withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
}