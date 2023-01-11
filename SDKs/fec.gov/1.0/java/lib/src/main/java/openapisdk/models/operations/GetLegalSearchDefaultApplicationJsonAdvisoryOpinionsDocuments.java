package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public LocalDate date;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_id")
    public Long documentId;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments withUrl(String url) {
        this.url = url;
        return this;
    }
}