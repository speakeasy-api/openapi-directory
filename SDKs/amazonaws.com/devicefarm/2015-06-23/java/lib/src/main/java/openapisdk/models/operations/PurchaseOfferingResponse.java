package openapisdk.models.operations;



public class PurchaseOfferingResponse {
    public Object argumentException;
    public PurchaseOfferingResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public PurchaseOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public PurchaseOfferingResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notEligibleException;
    public PurchaseOfferingResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public PurchaseOfferingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PurchaseOfferingResult purchaseOfferingResult;
    public PurchaseOfferingResponse withPurchaseOfferingResult(openapisdk.models.shared.PurchaseOfferingResult purchaseOfferingResult) {
        this.purchaseOfferingResult = purchaseOfferingResult;
        return this;
    }
    public Object serviceAccountException;
    public PurchaseOfferingResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public PurchaseOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}