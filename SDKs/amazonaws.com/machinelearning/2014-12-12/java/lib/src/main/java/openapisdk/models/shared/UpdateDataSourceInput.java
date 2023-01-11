package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDataSourceInput {
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public UpdateDataSourceInput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonProperty("DataSourceName")
    public String dataSourceName;
    public UpdateDataSourceInput withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
}