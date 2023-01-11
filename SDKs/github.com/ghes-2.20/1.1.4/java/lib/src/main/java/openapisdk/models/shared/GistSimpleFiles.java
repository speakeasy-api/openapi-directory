package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistSimpleFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GistSimpleFiles withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public GistSimpleFiles withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public GistSimpleFiles withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raw_url")
    public String rawUrl;
    public GistSimpleFiles withRawUrl(String rawUrl) {
        this.rawUrl = rawUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public GistSimpleFiles withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public GistSimpleFiles withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GistSimpleFiles withType(String type) {
        this.type = type;
        return this;
    }
}