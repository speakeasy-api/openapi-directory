package openapisdk.models.operations;



public class GetApiActivityResponse {
    public openapisdk.models.shared.ApiRequest[] apiRequests;
    public GetApiActivityResponse withApiRequests(openapisdk.models.shared.ApiRequest[] apiRequests) {
        this.apiRequests = apiRequests;
        return this;
    }
    public String contentType;
    public GetApiActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetApiActivityResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetApiActivityResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetApiActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}