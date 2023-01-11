package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Hit
 * Information about a document that matches the search request.
**/
public class Hit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exprs")
    public java.util.Map<String, String> exprs;
    public Hit withExprs(java.util.Map<String, String> exprs) {
        this.exprs = exprs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String[]> fields;
    public Hit withFields(java.util.Map<String, String[]> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public java.util.Map<String, String> highlights;
    public Hit withHighlights(java.util.Map<String, String> highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Hit withId(String id) {
        this.id = id;
        return this;
    }
}