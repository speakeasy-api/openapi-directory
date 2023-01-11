package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public DataSource[] dataSources;
    public ListDataSourcesResponse withDataSources(DataSource[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDataSourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}