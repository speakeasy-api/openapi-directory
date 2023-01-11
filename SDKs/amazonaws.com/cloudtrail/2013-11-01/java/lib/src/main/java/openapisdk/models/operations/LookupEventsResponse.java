package openapisdk.models.operations;



public class LookupEventsResponse {
    public String contentType;
    public LookupEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidEventCategoryException;
    public LookupEventsResponse withInvalidEventCategoryException(Object invalidEventCategoryException) {
        this.invalidEventCategoryException = invalidEventCategoryException;
        return this;
    }
    public Object invalidLookupAttributesException;
    public LookupEventsResponse withInvalidLookupAttributesException(Object invalidLookupAttributesException) {
        this.invalidLookupAttributesException = invalidLookupAttributesException;
        return this;
    }
    public Object invalidMaxResultsException;
    public LookupEventsResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidNextTokenException;
    public LookupEventsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidTimeRangeException;
    public LookupEventsResponse withInvalidTimeRangeException(Object invalidTimeRangeException) {
        this.invalidTimeRangeException = invalidTimeRangeException;
        return this;
    }
    public openapisdk.models.shared.LookupEventsResponse lookupEventsResponse;
    public LookupEventsResponse withLookupEventsResponse(openapisdk.models.shared.LookupEventsResponse lookupEventsResponse) {
        this.lookupEventsResponse = lookupEventsResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public LookupEventsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public LookupEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public LookupEventsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}