package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterClusterParameterStatus
 * The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterClusterParameterStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterApplyErrorDescription")
    public String parameterApplyErrorDescription;
    public AwsRedshiftClusterClusterParameterStatus withParameterApplyErrorDescription(String parameterApplyErrorDescription) {
        this.parameterApplyErrorDescription = parameterApplyErrorDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterApplyStatus")
    public String parameterApplyStatus;
    public AwsRedshiftClusterClusterParameterStatus withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterName")
    public String parameterName;
    public AwsRedshiftClusterClusterParameterStatus withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
}