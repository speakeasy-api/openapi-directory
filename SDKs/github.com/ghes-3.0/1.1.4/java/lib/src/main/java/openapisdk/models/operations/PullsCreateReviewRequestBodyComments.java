package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsCreateReviewRequestBodyComments {
    @JsonProperty("body")
    public String body;
    public PullsCreateReviewRequestBodyComments withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public Long line;
    public PullsCreateReviewRequestBodyComments withLine(Long line) {
        this.line = line;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PullsCreateReviewRequestBodyComments withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public PullsCreateReviewRequestBodyComments withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("side")
    public String side;
    public PullsCreateReviewRequestBodyComments withSide(String side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_line")
    public Long startLine;
    public PullsCreateReviewRequestBodyComments withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_side")
    public String startSide;
    public PullsCreateReviewRequestBodyComments withStartSide(String startSide) {
        this.startSide = startSide;
        return this;
    }
}