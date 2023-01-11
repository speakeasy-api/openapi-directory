package openapisdk.models.operations;



public class RenewOfferingResponse {
    public Object argumentException;
    public RenewOfferingResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public RenewOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public RenewOfferingResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notEligibleException;
    public RenewOfferingResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public RenewOfferingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.RenewOfferingResult renewOfferingResult;
    public RenewOfferingResponse withRenewOfferingResult(openapisdk.models.shared.RenewOfferingResult renewOfferingResult) {
        this.renewOfferingResult = renewOfferingResult;
        return this;
    }
    public Object serviceAccountException;
    public RenewOfferingResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public RenewOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}