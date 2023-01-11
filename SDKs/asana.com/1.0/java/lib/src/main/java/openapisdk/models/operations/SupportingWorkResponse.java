package openapisdk.models.operations;



public class SupportingWorkResponse {
    public String contentType;
    public SupportingWorkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public SupportingWorkResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public SupportingWorkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SupportingWork200ApplicationJson supportingWork200ApplicationJSONObject;
    public SupportingWorkResponse withSupportingWork200ApplicationJsonObject(SupportingWork200ApplicationJson supportingWork200ApplicationJSONObject) {
        this.supportingWork200ApplicationJSONObject = supportingWork200ApplicationJSONObject;
        return this;
    }
}