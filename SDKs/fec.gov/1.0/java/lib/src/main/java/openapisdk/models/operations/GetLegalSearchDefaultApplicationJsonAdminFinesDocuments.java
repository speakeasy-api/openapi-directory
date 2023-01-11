package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdminFinesDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_date")
    public LocalDate documentDate;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_id")
    public Long documentId;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments withUrl(String url) {
        this.url = url;
        return this;
    }
}