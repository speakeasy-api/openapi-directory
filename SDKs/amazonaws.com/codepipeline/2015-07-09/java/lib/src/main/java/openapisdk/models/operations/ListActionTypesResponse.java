package openapisdk.models.operations;



public class ListActionTypesResponse {
    public String contentType;
    public ListActionTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListActionTypesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListActionTypesOutput listActionTypesOutput;
    public ListActionTypesResponse withListActionTypesOutput(openapisdk.models.shared.ListActionTypesOutput listActionTypesOutput) {
        this.listActionTypesOutput = listActionTypesOutput;
        return this;
    }
    public Long statusCode;
    public ListActionTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListActionTypesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}