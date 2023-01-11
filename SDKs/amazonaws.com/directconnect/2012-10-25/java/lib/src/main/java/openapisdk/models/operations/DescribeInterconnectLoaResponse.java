package openapisdk.models.operations;



public class DescribeInterconnectLoaResponse {
    public String contentType;
    public DescribeInterconnectLoaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInterconnectLoaResponse describeInterconnectLoaResponse;
    public DescribeInterconnectLoaResponse withDescribeInterconnectLoaResponse(openapisdk.models.shared.DescribeInterconnectLoaResponse describeInterconnectLoaResponse) {
        this.describeInterconnectLoaResponse = describeInterconnectLoaResponse;
        return this;
    }
    public Object directConnectClientException;
    public DescribeInterconnectLoaResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeInterconnectLoaResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeInterconnectLoaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}