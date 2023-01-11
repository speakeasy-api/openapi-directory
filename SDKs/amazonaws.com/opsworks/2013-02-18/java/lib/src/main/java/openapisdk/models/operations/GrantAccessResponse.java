package openapisdk.models.operations;



public class GrantAccessResponse {
    public String contentType;
    public GrantAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GrantAccessResult grantAccessResult;
    public GrantAccessResponse withGrantAccessResult(openapisdk.models.shared.GrantAccessResult grantAccessResult) {
        this.grantAccessResult = grantAccessResult;
        return this;
    }
    public Object resourceNotFoundException;
    public GrantAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GrantAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GrantAccessResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}