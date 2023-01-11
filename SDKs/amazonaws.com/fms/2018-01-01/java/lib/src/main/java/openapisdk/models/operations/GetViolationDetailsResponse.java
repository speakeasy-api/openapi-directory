package openapisdk.models.operations;



public class GetViolationDetailsResponse {
    public String contentType;
    public GetViolationDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetViolationDetailsResponse getViolationDetailsResponse;
    public GetViolationDetailsResponse withGetViolationDetailsResponse(openapisdk.models.shared.GetViolationDetailsResponse getViolationDetailsResponse) {
        this.getViolationDetailsResponse = getViolationDetailsResponse;
        return this;
    }
    public Object internalErrorException;
    public GetViolationDetailsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public GetViolationDetailsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetViolationDetailsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetViolationDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}