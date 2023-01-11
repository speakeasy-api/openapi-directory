package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public SingleCollection200ApplicationJsonCollectionItemRequestBody body;
    public SingleCollection200ApplicationJsonCollectionItemRequest withBody(SingleCollection200ApplicationJsonCollectionItemRequestBody body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SingleCollection200ApplicationJsonCollectionItemRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public SingleCollection200ApplicationJsonCollectionItemRequestHeader[] header;
    public SingleCollection200ApplicationJsonCollectionItemRequest withHeader(SingleCollection200ApplicationJsonCollectionItemRequestHeader[] header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public SingleCollection200ApplicationJsonCollectionItemRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SingleCollection200ApplicationJsonCollectionItemRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}