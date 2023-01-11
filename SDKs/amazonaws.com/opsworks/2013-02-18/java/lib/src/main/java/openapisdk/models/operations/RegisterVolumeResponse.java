package openapisdk.models.operations;



public class RegisterVolumeResponse {
    public String contentType;
    public RegisterVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegisterVolumeResult registerVolumeResult;
    public RegisterVolumeResponse withRegisterVolumeResult(openapisdk.models.shared.RegisterVolumeResult registerVolumeResult) {
        this.registerVolumeResult = registerVolumeResult;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterVolumeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterVolumeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}