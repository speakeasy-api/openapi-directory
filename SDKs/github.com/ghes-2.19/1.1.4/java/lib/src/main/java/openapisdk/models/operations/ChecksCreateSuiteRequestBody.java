package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksCreateSuiteRequestBody {
    @JsonProperty("head_sha")
    public String headSha;
    public ChecksCreateSuiteRequestBody withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
}