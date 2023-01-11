package openapisdk.models.operations;



public class GetRecordResponse {
    public Object accessForbidden;
    public GetRecordResponse withAccessForbidden(Object accessForbidden) {
        this.accessForbidden = accessForbidden;
        return this;
    }
    public String contentType;
    public GetRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRecordResponse getRecordResponse;
    public GetRecordResponse withGetRecordResponse(openapisdk.models.shared.GetRecordResponse getRecordResponse) {
        this.getRecordResponse = getRecordResponse;
        return this;
    }
    public Object internalFailure;
    public GetRecordResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public Object resourceNotFound;
    public GetRecordResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    public Object serviceUnavailable;
    public GetRecordResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public GetRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public GetRecordResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}