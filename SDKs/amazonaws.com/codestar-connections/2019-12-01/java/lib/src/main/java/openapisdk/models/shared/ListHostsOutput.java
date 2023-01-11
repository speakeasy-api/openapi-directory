package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHostsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hosts")
    public Host[] hosts;
    public ListHostsOutput withHosts(Host[] hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHostsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}