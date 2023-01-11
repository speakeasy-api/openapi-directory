package openapisdk.models.operations;



public class GetOnlineSzamlaStatusResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public GetOnlineSzamlaStatusResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public GetOnlineSzamlaStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOnlineSzamlaStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.OnlineSzamlaStatus onlineSzamlaStatus;
    public GetOnlineSzamlaStatusResponse withOnlineSzamlaStatus(openapisdk.models.shared.OnlineSzamlaStatus onlineSzamlaStatus) {
        this.onlineSzamlaStatus = onlineSzamlaStatus;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public GetOnlineSzamlaStatusResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetOnlineSzamlaStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public GetOnlineSzamlaStatusResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}