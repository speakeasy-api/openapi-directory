package openapisdk.models.operations;



public class ListDevicesResponse {
    public Object accessDeniedException;
    public ListDevicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDevicesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDevicesOutput listDevicesOutput;
    public ListDevicesResponse withListDevicesOutput(openapisdk.models.shared.ListDevicesOutput listDevicesOutput) {
        this.listDevicesOutput = listDevicesOutput;
        return this;
    }
    public Long statusCode;
    public ListDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDevicesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDevicesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}