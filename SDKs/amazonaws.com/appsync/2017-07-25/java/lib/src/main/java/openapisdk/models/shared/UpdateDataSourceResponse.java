package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDataSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSource dataSource;
    public UpdateDataSourceResponse withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
}