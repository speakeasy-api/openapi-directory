package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadDocumentsRequestBody {
    @JsonProperty("documents")
    public String documents;
    public UploadDocumentsRequestBody withDocuments(String documents) {
        this.documents = documents;
        return this;
    }
}