package openapisdk.models.operations;



public class ListSourceCredentialsResponse {
    public String contentType;
    public ListSourceCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListSourceCredentialsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListSourceCredentialsOutput listSourceCredentialsOutput;
    public ListSourceCredentialsResponse withListSourceCredentialsOutput(openapisdk.models.shared.ListSourceCredentialsOutput listSourceCredentialsOutput) {
        this.listSourceCredentialsOutput = listSourceCredentialsOutput;
        return this;
    }
    public Long statusCode;
    public ListSourceCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}