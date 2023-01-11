package openapisdk.models.operations;



public class GetPlanResponse {
    public String contentType;
    public GetPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPlanResponse getPlanResponse;
    public GetPlanResponse withGetPlanResponse(openapisdk.models.shared.GetPlanResponse getPlanResponse) {
        this.getPlanResponse = getPlanResponse;
        return this;
    }
    public Object internalServiceException;
    public GetPlanResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetPlanResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetPlanResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}