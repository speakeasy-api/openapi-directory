package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonRegulations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc_id")
    public String docId;
    public GetLegalSearchDefaultApplicationJsonRegulations withDocId(String docId) {
        this.docId = docId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonRegulations withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonRegulations withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonRegulations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonRegulations withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonRegulations withUrl(String url) {
        this.url = url;
        return this;
    }
}