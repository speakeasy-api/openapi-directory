package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectDocumentTextRequest {
    @JsonProperty("Document")
    public Document document;
    public DetectDocumentTextRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
}