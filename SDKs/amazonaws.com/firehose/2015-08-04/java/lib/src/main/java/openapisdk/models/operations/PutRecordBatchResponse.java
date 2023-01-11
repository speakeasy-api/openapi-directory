package openapisdk.models.operations;



public class PutRecordBatchResponse {
    public String contentType;
    public PutRecordBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public PutRecordBatchResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidKMSResourceException;
    public PutRecordBatchResponse withInvalidKmsResourceException(Object invalidKMSResourceException) {
        this.invalidKMSResourceException = invalidKMSResourceException;
        return this;
    }
    public openapisdk.models.shared.PutRecordBatchOutput putRecordBatchOutput;
    public PutRecordBatchResponse withPutRecordBatchOutput(openapisdk.models.shared.PutRecordBatchOutput putRecordBatchOutput) {
        this.putRecordBatchOutput = putRecordBatchOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRecordBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutRecordBatchResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutRecordBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}