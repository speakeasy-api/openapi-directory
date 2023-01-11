package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDataSourceFromS3Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeStatistics")
    public Boolean computeStatistics;
    public CreateDataSourceFromS3Input withComputeStatistics(Boolean computeStatistics) {
        this.computeStatistics = computeStatistics;
        return this;
    }
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public CreateDataSourceFromS3Input withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceName")
    public String dataSourceName;
    public CreateDataSourceFromS3Input withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonProperty("DataSpec")
    public S3DataSpec dataSpec;
    public CreateDataSourceFromS3Input withDataSpec(S3DataSpec dataSpec) {
        this.dataSpec = dataSpec;
        return this;
    }
}