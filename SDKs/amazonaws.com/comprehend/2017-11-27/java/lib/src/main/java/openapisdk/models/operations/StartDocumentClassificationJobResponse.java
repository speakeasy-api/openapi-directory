package openapisdk.models.operations;



public class StartDocumentClassificationJobResponse {
    public String contentType;
    public StartDocumentClassificationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartDocumentClassificationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartDocumentClassificationJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartDocumentClassificationJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartDocumentClassificationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public StartDocumentClassificationJobResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartDocumentClassificationJobResponse startDocumentClassificationJobResponse;
    public StartDocumentClassificationJobResponse withStartDocumentClassificationJobResponse(openapisdk.models.shared.StartDocumentClassificationJobResponse startDocumentClassificationJobResponse) {
        this.startDocumentClassificationJobResponse = startDocumentClassificationJobResponse;
        return this;
    }
    public Long statusCode;
    public StartDocumentClassificationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartDocumentClassificationJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartDocumentClassificationJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}