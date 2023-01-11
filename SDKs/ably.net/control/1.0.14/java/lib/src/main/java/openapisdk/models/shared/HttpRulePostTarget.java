package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HttpRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public HttpRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonProperty("format")
    public HttpRulePostTargetFormatEnum format;
    public HttpRulePostTarget withFormat(HttpRulePostTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public HttpRulePostTargetHeaders[] headers;
    public HttpRulePostTarget withHeaders(HttpRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public HttpRulePostTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public HttpRulePostTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}