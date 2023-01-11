package openapisdk.models.operations;



public class DescribeLoaResponse {
    public String contentType;
    public DescribeLoaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeLoaResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeLoaResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Loa loa;
    public DescribeLoaResponse withLoa(openapisdk.models.shared.Loa loa) {
        this.loa = loa;
        return this;
    }
    public Long statusCode;
    public DescribeLoaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}