package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Keyword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_types")
    public String[] entityTypes;
    public Keyword withEntityTypes(String[] entityTypes) {
        this.entityTypes = entityTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_uris")
    public String[] entityUris;
    public Keyword withEntityUris(String[] entityUris) {
        this.entityUris = entityUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyword_id")
    public String keywordId;
    public Keyword withKeywordId(String keywordId) {
        this.keywordId = keywordId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public Integer relevance;
    public Keyword withRelevance(Integer relevance) {
        this.relevance = relevance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Keyword withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Keyword withType(String type) {
        this.type = type;
        return this;
    }
}