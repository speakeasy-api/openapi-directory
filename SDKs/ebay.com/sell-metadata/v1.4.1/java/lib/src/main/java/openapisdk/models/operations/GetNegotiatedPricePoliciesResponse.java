package openapisdk.models.operations;



public class GetNegotiatedPricePoliciesResponse {
    public String contentType;
    public GetNegotiatedPricePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NegotiatedPricePolicyResponse negotiatedPricePolicyResponse;
    public GetNegotiatedPricePoliciesResponse withNegotiatedPricePolicyResponse(openapisdk.models.shared.NegotiatedPricePolicyResponse negotiatedPricePolicyResponse) {
        this.negotiatedPricePolicyResponse = negotiatedPricePolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetNegotiatedPricePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}