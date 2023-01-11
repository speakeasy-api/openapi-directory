package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistsUpdateRequestBodyFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GistsUpdateRequestBodyFiles withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public GistsUpdateRequestBodyFiles withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}