package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDataSourceInput {
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public DeleteDataSourceInput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}