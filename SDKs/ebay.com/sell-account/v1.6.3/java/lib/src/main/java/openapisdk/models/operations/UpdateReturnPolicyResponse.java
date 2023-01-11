package openapisdk.models.operations;



public class UpdateReturnPolicyResponse {
    public String contentType;
    public UpdateReturnPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SetReturnPolicyResponse setReturnPolicyResponse;
    public UpdateReturnPolicyResponse withSetReturnPolicyResponse(openapisdk.models.shared.SetReturnPolicyResponse setReturnPolicyResponse) {
        this.setReturnPolicyResponse = setReturnPolicyResponse;
        return this;
    }
    public Long statusCode;
    public UpdateReturnPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}