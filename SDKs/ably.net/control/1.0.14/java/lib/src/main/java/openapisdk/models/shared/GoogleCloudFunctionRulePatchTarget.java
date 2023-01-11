package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudFunctionRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public GoogleCloudFunctionRulePatchTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public GoogleCloudFunctionRulePatchTargetFormatEnum format;
    public GoogleCloudFunctionRulePatchTarget withFormat(GoogleCloudFunctionRulePatchTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionName")
    public String functionName;
    public GoogleCloudFunctionRulePatchTarget withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GoogleCloudFunctionRulePatchTargetHeaders[] headers;
    public GoogleCloudFunctionRulePatchTarget withHeaders(GoogleCloudFunctionRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudFunctionRulePatchTarget withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GoogleCloudFunctionRulePatchTarget withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public GoogleCloudFunctionRulePatchTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}