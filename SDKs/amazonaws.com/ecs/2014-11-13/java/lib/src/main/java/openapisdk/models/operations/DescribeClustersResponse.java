package openapisdk.models.operations;



public class DescribeClustersResponse {
    public Object clientException;
    public DescribeClustersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClustersResponse describeClustersResponse;
    public DescribeClustersResponse withDescribeClustersResponse(openapisdk.models.shared.DescribeClustersResponse describeClustersResponse) {
        this.describeClustersResponse = describeClustersResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeClustersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeClustersResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}