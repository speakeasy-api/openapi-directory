package openapisdk.models.operations;



public class PutRecordResponse {
    public Object accessForbidden;
    public PutRecordResponse withAccessForbidden(Object accessForbidden) {
        this.accessForbidden = accessForbidden;
        return this;
    }
    public String contentType;
    public PutRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailure;
    public PutRecordResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public Object serviceUnavailable;
    public PutRecordResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public PutRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public PutRecordResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}