package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDataSourceFromRdsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeStatistics")
    public Boolean computeStatistics;
    public CreateDataSourceFromRdsInput withComputeStatistics(Boolean computeStatistics) {
        this.computeStatistics = computeStatistics;
        return this;
    }
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public CreateDataSourceFromRdsInput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceName")
    public String dataSourceName;
    public CreateDataSourceFromRdsInput withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonProperty("RDSData")
    public RdsDataSpec rdsData;
    public CreateDataSourceFromRdsInput withRdsData(RdsDataSpec rdsData) {
        this.rdsData = rdsData;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CreateDataSourceFromRdsInput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}