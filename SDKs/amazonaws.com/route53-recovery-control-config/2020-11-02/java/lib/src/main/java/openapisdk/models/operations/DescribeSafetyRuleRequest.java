package openapisdk.models.operations;



public class DescribeSafetyRuleRequest {
    public DescribeSafetyRulePathParams pathParams;
    public DescribeSafetyRuleRequest withPathParams(DescribeSafetyRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeSafetyRuleHeaders headers;
    public DescribeSafetyRuleRequest withHeaders(DescribeSafetyRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
}