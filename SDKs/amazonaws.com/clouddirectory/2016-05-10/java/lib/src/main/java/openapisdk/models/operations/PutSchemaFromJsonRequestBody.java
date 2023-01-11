package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutSchemaFromJsonRequestBody {
    @JsonProperty("Document")
    public String document;
    public PutSchemaFromJsonRequestBody withDocument(String document) {
        this.document = document;
        return this;
    }
}