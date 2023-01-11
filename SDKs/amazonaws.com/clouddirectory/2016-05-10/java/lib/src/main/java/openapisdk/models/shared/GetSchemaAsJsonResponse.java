package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchemaAsJsonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Document")
    public String document;
    public GetSchemaAsJsonResponse withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetSchemaAsJsonResponse withName(String name) {
        this.name = name;
        return this;
    }
}