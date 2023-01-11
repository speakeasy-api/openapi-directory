package openapisdk.models.operations;



public class GetOfferingStatusResponse {
    public Object argumentException;
    public GetOfferingStatusResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetOfferingStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOfferingStatusResult getOfferingStatusResult;
    public GetOfferingStatusResponse withGetOfferingStatusResult(openapisdk.models.shared.GetOfferingStatusResult getOfferingStatusResult) {
        this.getOfferingStatusResult = getOfferingStatusResult;
        return this;
    }
    public Object limitExceededException;
    public GetOfferingStatusResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notEligibleException;
    public GetOfferingStatusResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public GetOfferingStatusResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetOfferingStatusResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetOfferingStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}