package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonStatutes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter")
    public String chapter;
    public GetLegalSearchDefaultApplicationJsonStatutes withChapter(String chapter) {
        this.chapter = chapter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc_id")
    public String docId;
    public GetLegalSearchDefaultApplicationJsonStatutes withDocId(String docId) {
        this.docId = docId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonStatutes withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonStatutes withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonStatutes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonStatutes withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetLegalSearchDefaultApplicationJsonStatutes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonStatutes withUrl(String url) {
        this.url = url;
        return this;
    }
}