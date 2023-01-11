package openapisdk.models.operations;



public class CreateReturnPolicyResponse {
    public String contentType;
    public CreateReturnPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateReturnPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SetReturnPolicyResponse setReturnPolicyResponse;
    public CreateReturnPolicyResponse withSetReturnPolicyResponse(openapisdk.models.shared.SetReturnPolicyResponse setReturnPolicyResponse) {
        this.setReturnPolicyResponse = setReturnPolicyResponse;
        return this;
    }
    public Long statusCode;
    public CreateReturnPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}