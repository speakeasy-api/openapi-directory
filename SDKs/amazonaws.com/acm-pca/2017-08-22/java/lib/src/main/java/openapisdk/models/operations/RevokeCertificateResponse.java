package openapisdk.models.operations;



public class RevokeCertificateResponse {
    public Object concurrentModificationException;
    public RevokeCertificateResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RevokeCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public RevokeCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidRequestException;
    public RevokeCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public RevokeCertificateResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public RevokeCertificateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object requestAlreadyProcessedException;
    public RevokeCertificateResponse withRequestAlreadyProcessedException(Object requestAlreadyProcessedException) {
        this.requestAlreadyProcessedException = requestAlreadyProcessedException;
        return this;
    }
    public Object requestFailedException;
    public RevokeCertificateResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object requestInProgressException;
    public RevokeCertificateResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public RevokeCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RevokeCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}