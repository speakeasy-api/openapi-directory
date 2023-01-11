package openapisdk.models.operations;



public class GetComplianceDetailResponse {
    public String contentType;
    public GetComplianceDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceDetailResponse getComplianceDetailResponse;
    public GetComplianceDetailResponse withGetComplianceDetailResponse(openapisdk.models.shared.GetComplianceDetailResponse getComplianceDetailResponse) {
        this.getComplianceDetailResponse = getComplianceDetailResponse;
        return this;
    }
    public Object internalErrorException;
    public GetComplianceDetailResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public GetComplianceDetailResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public GetComplianceDetailResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetComplianceDetailResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetComplianceDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}