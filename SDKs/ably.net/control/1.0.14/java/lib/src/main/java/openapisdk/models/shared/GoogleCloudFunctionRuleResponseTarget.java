package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudFunctionRuleResponseTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public GoogleCloudFunctionRuleResponseTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public GoogleCloudFunctionRuleResponseTargetFormatEnum format;
    public GoogleCloudFunctionRuleResponseTarget withFormat(GoogleCloudFunctionRuleResponseTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("functionName")
    public String functionName;
    public GoogleCloudFunctionRuleResponseTarget withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GoogleCloudFunctionRuleResponseTargetHeaders[] headers;
    public GoogleCloudFunctionRuleResponseTarget withHeaders(GoogleCloudFunctionRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudFunctionRuleResponseTarget withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public GoogleCloudFunctionRuleResponseTarget withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public GoogleCloudFunctionRuleResponseTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}