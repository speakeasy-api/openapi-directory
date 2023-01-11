package openapisdk.models.operations;



public class TestUrlRewritingRulesResponse {
    public String contentType;
    public TestUrlRewritingRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public TestUrlRewritingRulesResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public TestUrlRewritingRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UrlRewritingRulesSerializer urlRewritingRulesSerializer;
    public TestUrlRewritingRulesResponse withUrlRewritingRulesSerializer(openapisdk.models.shared.UrlRewritingRulesSerializer urlRewritingRulesSerializer) {
        this.urlRewritingRulesSerializer = urlRewritingRulesSerializer;
        return this;
    }
}