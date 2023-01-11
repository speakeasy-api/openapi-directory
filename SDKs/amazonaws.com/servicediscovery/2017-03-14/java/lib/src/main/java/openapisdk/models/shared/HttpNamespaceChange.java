package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HttpNamespaceChange
 * Updated properties for the HTTP namespace.
**/
public class HttpNamespaceChange {
    @JsonProperty("Description")
    public String description;
    public HttpNamespaceChange withDescription(String description) {
        this.description = description;
        return this;
    }
}