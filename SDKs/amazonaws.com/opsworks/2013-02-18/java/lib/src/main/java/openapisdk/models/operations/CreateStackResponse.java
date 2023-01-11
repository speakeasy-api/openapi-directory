package openapisdk.models.operations;



public class CreateStackResponse {
    public String contentType;
    public CreateStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStackResult createStackResult;
    public CreateStackResponse withCreateStackResult(openapisdk.models.shared.CreateStackResult createStackResult) {
        this.createStackResult = createStackResult;
        return this;
    }
    public Long statusCode;
    public CreateStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}