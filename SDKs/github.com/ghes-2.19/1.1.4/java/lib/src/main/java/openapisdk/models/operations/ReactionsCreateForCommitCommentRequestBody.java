package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForCommitCommentRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForCommitCommentRequestBodyContentEnum content;
    public ReactionsCreateForCommitCommentRequestBody withContent(ReactionsCreateForCommitCommentRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}