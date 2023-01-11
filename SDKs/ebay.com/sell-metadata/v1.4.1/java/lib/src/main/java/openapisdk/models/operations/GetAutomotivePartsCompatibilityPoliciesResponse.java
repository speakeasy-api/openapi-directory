package openapisdk.models.operations;



public class GetAutomotivePartsCompatibilityPoliciesResponse {
    public openapisdk.models.shared.AutomotivePartsCompatibilityPolicyResponse automotivePartsCompatibilityPolicyResponse;
    public GetAutomotivePartsCompatibilityPoliciesResponse withAutomotivePartsCompatibilityPolicyResponse(openapisdk.models.shared.AutomotivePartsCompatibilityPolicyResponse automotivePartsCompatibilityPolicyResponse) {
        this.automotivePartsCompatibilityPolicyResponse = automotivePartsCompatibilityPolicyResponse;
        return this;
    }
    public String contentType;
    public GetAutomotivePartsCompatibilityPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomotivePartsCompatibilityPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}