package openapisdk.models.operations;



public class GetFindingsResponse {
    public String contentType;
    public GetFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingsResponse getFindingsResponse;
    public GetFindingsResponse withGetFindingsResponse(openapisdk.models.shared.GetFindingsResponse getFindingsResponse) {
        this.getFindingsResponse = getFindingsResponse;
        return this;
    }
    public Object internalException;
    public GetFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetFindingsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetFindingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public GetFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}