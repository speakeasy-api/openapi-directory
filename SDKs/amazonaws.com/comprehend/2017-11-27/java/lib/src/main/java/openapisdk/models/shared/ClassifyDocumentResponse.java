package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClassifyDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classes")
    public DocumentClass[] classes;
    public ClassifyDocumentResponse withClasses(DocumentClass[] classes) {
        this.classes = classes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public DocumentLabel[] labels;
    public ClassifyDocumentResponse withLabels(DocumentLabel[] labels) {
        this.labels = labels;
        return this;
    }
}