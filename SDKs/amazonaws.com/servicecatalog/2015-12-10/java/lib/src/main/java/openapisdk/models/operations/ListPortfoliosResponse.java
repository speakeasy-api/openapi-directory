package openapisdk.models.operations;



public class ListPortfoliosResponse {
    public String contentType;
    public ListPortfoliosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListPortfoliosResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListPortfoliosOutput listPortfoliosOutput;
    public ListPortfoliosResponse withListPortfoliosOutput(openapisdk.models.shared.ListPortfoliosOutput listPortfoliosOutput) {
        this.listPortfoliosOutput = listPortfoliosOutput;
        return this;
    }
    public Long statusCode;
    public ListPortfoliosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}