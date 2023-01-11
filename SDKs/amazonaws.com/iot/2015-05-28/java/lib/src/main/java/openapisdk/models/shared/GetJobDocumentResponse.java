package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public GetJobDocumentResponse withDocument(String document) {
        this.document = document;
        return this;
    }
}