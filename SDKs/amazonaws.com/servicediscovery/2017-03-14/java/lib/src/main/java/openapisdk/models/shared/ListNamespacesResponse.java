package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNamespacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespaces")
    public NamespaceSummary[] namespaces;
    public ListNamespacesResponse withNamespaces(NamespaceSummary[] namespaces) {
        this.namespaces = namespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNamespacesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}