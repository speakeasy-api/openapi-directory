package openapisdk.models.operations;



public class ListServicesResponse {
    public Object accessDeniedException;
    public ListServicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListServicesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListServicesOutput listServicesOutput;
    public ListServicesResponse withListServicesOutput(openapisdk.models.shared.ListServicesOutput listServicesOutput) {
        this.listServicesOutput = listServicesOutput;
        return this;
    }
    public Long statusCode;
    public ListServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListServicesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListServicesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}