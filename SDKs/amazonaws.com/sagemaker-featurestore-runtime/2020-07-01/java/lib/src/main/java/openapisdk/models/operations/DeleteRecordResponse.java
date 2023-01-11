package openapisdk.models.operations;



public class DeleteRecordResponse {
    public Object accessForbidden;
    public DeleteRecordResponse withAccessForbidden(Object accessForbidden) {
        this.accessForbidden = accessForbidden;
        return this;
    }
    public String contentType;
    public DeleteRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailure;
    public DeleteRecordResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public Object serviceUnavailable;
    public DeleteRecordResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public DeleteRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public DeleteRecordResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}