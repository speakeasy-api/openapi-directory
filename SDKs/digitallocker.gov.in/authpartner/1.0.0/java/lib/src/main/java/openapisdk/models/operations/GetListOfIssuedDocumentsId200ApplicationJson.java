package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetListOfIssuedDocumentsId200ApplicationJson {
    @JsonProperty("items")
    public Object[] items;
    public GetListOfIssuedDocumentsId200ApplicationJson withItems(Object[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetListOfIssuedDocumentsId200ApplicationJson withResource(String resource) {
        this.resource = resource;
        return this;
    }
}