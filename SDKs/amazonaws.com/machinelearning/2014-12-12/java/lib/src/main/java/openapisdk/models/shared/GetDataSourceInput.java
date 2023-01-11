package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataSourceInput {
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public GetDataSourceInput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Verbose")
    public Boolean verbose;
    public GetDataSourceInput withVerbose(Boolean verbose) {
        this.verbose = verbose;
        return this;
    }
}