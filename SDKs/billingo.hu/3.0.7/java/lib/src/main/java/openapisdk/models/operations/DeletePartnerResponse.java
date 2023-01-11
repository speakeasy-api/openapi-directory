package openapisdk.models.operations;



public class DeletePartnerResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public DeletePartnerResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public DeletePartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeletePartnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public DeletePartnerResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeletePartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}