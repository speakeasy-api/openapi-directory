package openapisdk.models.operations;



public class ListOfferingPromotionsResponse {
    public Object argumentException;
    public ListOfferingPromotionsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListOfferingPromotionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListOfferingPromotionsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListOfferingPromotionsResult listOfferingPromotionsResult;
    public ListOfferingPromotionsResponse withListOfferingPromotionsResult(openapisdk.models.shared.ListOfferingPromotionsResult listOfferingPromotionsResult) {
        this.listOfferingPromotionsResult = listOfferingPromotionsResult;
        return this;
    }
    public Object notEligibleException;
    public ListOfferingPromotionsResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public ListOfferingPromotionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListOfferingPromotionsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListOfferingPromotionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}