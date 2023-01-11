package openapisdk.models.operations;



public class GetEnabledStandardsResponse {
    public String contentType;
    public GetEnabledStandardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnabledStandardsResponse getEnabledStandardsResponse;
    public GetEnabledStandardsResponse withGetEnabledStandardsResponse(openapisdk.models.shared.GetEnabledStandardsResponse getEnabledStandardsResponse) {
        this.getEnabledStandardsResponse = getEnabledStandardsResponse;
        return this;
    }
    public Object internalException;
    public GetEnabledStandardsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetEnabledStandardsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetEnabledStandardsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetEnabledStandardsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public GetEnabledStandardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}