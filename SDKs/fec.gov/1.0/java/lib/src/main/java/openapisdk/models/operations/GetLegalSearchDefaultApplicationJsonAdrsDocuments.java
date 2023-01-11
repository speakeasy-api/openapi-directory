package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdrsDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_date")
    public LocalDate documentDate;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_id")
    public Long documentId;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments withUrl(String url) {
        this.url = url;
        return this;
    }
}