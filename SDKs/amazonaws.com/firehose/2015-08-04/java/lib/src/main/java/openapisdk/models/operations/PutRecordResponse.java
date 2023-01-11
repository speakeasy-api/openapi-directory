package openapisdk.models.operations;



public class PutRecordResponse {
    public String contentType;
    public PutRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public PutRecordResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidKMSResourceException;
    public PutRecordResponse withInvalidKmsResourceException(Object invalidKMSResourceException) {
        this.invalidKMSResourceException = invalidKMSResourceException;
        return this;
    }
    public openapisdk.models.shared.PutRecordOutput putRecordOutput;
    public PutRecordResponse withPutRecordOutput(openapisdk.models.shared.PutRecordOutput putRecordOutput) {
        this.putRecordOutput = putRecordOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutRecordResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}