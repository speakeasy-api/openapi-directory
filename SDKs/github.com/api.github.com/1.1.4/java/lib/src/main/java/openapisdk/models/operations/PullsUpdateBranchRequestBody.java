package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsUpdateBranchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expected_head_sha")
    public String expectedHeadSha;
    public PullsUpdateBranchRequestBody withExpectedHeadSha(String expectedHeadSha) {
        this.expectedHeadSha = expectedHeadSha;
        return this;
    }
}