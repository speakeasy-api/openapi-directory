package openapisdk.models.operations;



public class ListOfferingsResponse {
    public Object argumentException;
    public ListOfferingsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListOfferingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListOfferingsResult listOfferingsResult;
    public ListOfferingsResponse withListOfferingsResult(openapisdk.models.shared.ListOfferingsResult listOfferingsResult) {
        this.listOfferingsResult = listOfferingsResult;
        return this;
    }
    public Object notEligibleException;
    public ListOfferingsResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public ListOfferingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListOfferingsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}