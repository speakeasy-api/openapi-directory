package openapisdk.models.operations;



public class DescribeLagsResponse {
    public String contentType;
    public DescribeLagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeLagsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeLagsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Lags lags;
    public DescribeLagsResponse withLags(openapisdk.models.shared.Lags lags) {
        this.lags = lags;
        return this;
    }
    public Long statusCode;
    public DescribeLagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}