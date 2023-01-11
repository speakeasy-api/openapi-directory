package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AnalyzeExpenseRequest {
    @JsonProperty("Document")
    public Document document;
    public AnalyzeExpenseRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
}