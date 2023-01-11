package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDataSourceFromRedshiftInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeStatistics")
    public Boolean computeStatistics;
    public CreateDataSourceFromRedshiftInput withComputeStatistics(Boolean computeStatistics) {
        this.computeStatistics = computeStatistics;
        return this;
    }
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public CreateDataSourceFromRedshiftInput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceName")
    public String dataSourceName;
    public CreateDataSourceFromRedshiftInput withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonProperty("DataSpec")
    public RedshiftDataSpec dataSpec;
    public CreateDataSourceFromRedshiftInput withDataSpec(RedshiftDataSpec dataSpec) {
        this.dataSpec = dataSpec;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CreateDataSourceFromRedshiftInput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}