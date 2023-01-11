package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateBlobRequestBody {
    @JsonProperty("content")
    public String content;
    public GitCreateBlobRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public String encoding;
    public GitCreateBlobRequestBody withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
}