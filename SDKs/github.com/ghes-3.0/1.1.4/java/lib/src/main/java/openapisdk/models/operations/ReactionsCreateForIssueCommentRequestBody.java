package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForIssueCommentRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForIssueCommentRequestBodyContentEnum content;
    public ReactionsCreateForIssueCommentRequestBody withContent(ReactionsCreateForIssueCommentRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}