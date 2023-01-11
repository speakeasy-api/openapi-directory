package openapisdk.models.operations;



public class SelectResourceConfigResponse {
    public String contentType;
    public SelectResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidExpressionException;
    public SelectResourceConfigResponse withInvalidExpressionException(Object invalidExpressionException) {
        this.invalidExpressionException = invalidExpressionException;
        return this;
    }
    public Object invalidLimitException;
    public SelectResourceConfigResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public SelectResourceConfigResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.SelectResourceConfigResponse selectResourceConfigResponse;
    public SelectResourceConfigResponse withSelectResourceConfigResponse(openapisdk.models.shared.SelectResourceConfigResponse selectResourceConfigResponse) {
        this.selectResourceConfigResponse = selectResourceConfigResponse;
        return this;
    }
    public Long statusCode;
    public SelectResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}