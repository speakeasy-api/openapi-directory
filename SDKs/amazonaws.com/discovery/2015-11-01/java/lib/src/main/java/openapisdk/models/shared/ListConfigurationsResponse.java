package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurations")
    public java.util.Map<String, String>[] configurations;
    public ListConfigurationsResponse withConfigurations(java.util.Map<String, String>[] configurations) {
        this.configurations = configurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}