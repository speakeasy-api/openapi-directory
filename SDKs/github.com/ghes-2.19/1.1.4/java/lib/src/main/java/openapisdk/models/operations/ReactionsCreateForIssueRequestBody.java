package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForIssueRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForIssueRequestBodyContentEnum content;
    public ReactionsCreateForIssueRequestBody withContent(ReactionsCreateForIssueRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}