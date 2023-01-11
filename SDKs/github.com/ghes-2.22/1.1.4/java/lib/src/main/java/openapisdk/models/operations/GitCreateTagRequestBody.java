package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateTagRequestBody {
    @JsonProperty("message")
    public String message;
    public GitCreateTagRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public GitCreateTagRequestBody withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public GitCreateTagRequestBody withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagger")
    public GitCreateTagRequestBodyTagger tagger;
    public GitCreateTagRequestBody withTagger(GitCreateTagRequestBodyTagger tagger) {
        this.tagger = tagger;
        return this;
    }
    @JsonProperty("type")
    public GitCreateTagRequestBodyTypeEnum type;
    public GitCreateTagRequestBody withType(GitCreateTagRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}