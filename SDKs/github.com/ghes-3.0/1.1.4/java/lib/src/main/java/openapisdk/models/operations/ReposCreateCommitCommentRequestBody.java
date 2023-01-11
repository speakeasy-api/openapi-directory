package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateCommitCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public ReposCreateCommitCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public Long line;
    public ReposCreateCommitCommentRequestBody withLine(Long line) {
        this.line = line;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ReposCreateCommitCommentRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public ReposCreateCommitCommentRequestBody withPosition(Long position) {
        this.position = position;
        return this;
    }
}