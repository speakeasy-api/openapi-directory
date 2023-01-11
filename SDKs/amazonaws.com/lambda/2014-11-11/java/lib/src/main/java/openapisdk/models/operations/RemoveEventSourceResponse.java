package openapisdk.models.operations;



public class RemoveEventSourceResponse {
    public String contentType;
    public RemoveEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException;
    public RemoveEventSourceResponse withInvalidParameterValueException(openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public RemoveEventSourceResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public RemoveEventSourceResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RemoveEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}