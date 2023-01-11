package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterClusterParameterGroup
 * A cluster parameter group that is associated with an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterClusterParameterGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterParameterStatusList")
    public AwsRedshiftClusterClusterParameterStatus[] clusterParameterStatusList;
    public AwsRedshiftClusterClusterParameterGroup withClusterParameterStatusList(AwsRedshiftClusterClusterParameterStatus[] clusterParameterStatusList) {
        this.clusterParameterStatusList = clusterParameterStatusList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterApplyStatus")
    public String parameterApplyStatus;
    public AwsRedshiftClusterClusterParameterGroup withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public AwsRedshiftClusterClusterParameterGroup withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
}