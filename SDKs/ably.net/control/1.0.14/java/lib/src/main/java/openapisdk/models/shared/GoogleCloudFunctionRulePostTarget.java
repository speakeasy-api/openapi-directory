package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudFunctionRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public GoogleCloudFunctionRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public GoogleCloudFunctionRulePostTargetFormatEnum format;
    public GoogleCloudFunctionRulePostTarget withFormat(GoogleCloudFunctionRulePostTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("functionName")
    public String functionName;
    public GoogleCloudFunctionRulePostTarget withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GoogleCloudFunctionRulePostTargetHeaders[] headers;
    public GoogleCloudFunctionRulePostTarget withHeaders(GoogleCloudFunctionRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudFunctionRulePostTarget withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public GoogleCloudFunctionRulePostTarget withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public GoogleCloudFunctionRulePostTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}