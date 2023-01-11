package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBodyCollectionItemItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public CreateCollectionRequestBodyCollectionItemItemRequestBody body;
    public CreateCollectionRequestBodyCollectionItemItemRequest withBody(CreateCollectionRequestBodyCollectionItemItemRequestBody body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateCollectionRequestBodyCollectionItemItemRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public CreateCollectionRequestBodyCollectionItemItemRequestHeader[] header;
    public CreateCollectionRequestBodyCollectionItemItemRequest withHeader(CreateCollectionRequestBodyCollectionItemItemRequestHeader[] header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public CreateCollectionRequestBodyCollectionItemItemRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CreateCollectionRequestBodyCollectionItemItemRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}