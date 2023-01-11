package openapisdk.models.operations;



public class ListOfferingTransactionsResponse {
    public Object argumentException;
    public ListOfferingTransactionsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListOfferingTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListOfferingTransactionsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListOfferingTransactionsResult listOfferingTransactionsResult;
    public ListOfferingTransactionsResponse withListOfferingTransactionsResult(openapisdk.models.shared.ListOfferingTransactionsResult listOfferingTransactionsResult) {
        this.listOfferingTransactionsResult = listOfferingTransactionsResult;
        return this;
    }
    public Object notEligibleException;
    public ListOfferingTransactionsResponse withNotEligibleException(Object notEligibleException) {
        this.notEligibleException = notEligibleException;
        return this;
    }
    public Object notFoundException;
    public ListOfferingTransactionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListOfferingTransactionsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListOfferingTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}