package openapisdk.models.operations;



public class GetMappingResponse {
    public String contentType;
    public GetMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMappingResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMappingResponse getMappingResponse;
    public GetMappingResponse withGetMappingResponse(openapisdk.models.shared.GetMappingResponse getMappingResponse) {
        this.getMappingResponse = getMappingResponse;
        return this;
    }
    public Object internalServiceException;
    public GetMappingResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetMappingResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetMappingResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}