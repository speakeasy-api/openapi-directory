package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SrcSearchlyApiV1ControllersSimilarityByContentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public SrcSearchlyApiV1ControllersSimilarityByContentRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
}