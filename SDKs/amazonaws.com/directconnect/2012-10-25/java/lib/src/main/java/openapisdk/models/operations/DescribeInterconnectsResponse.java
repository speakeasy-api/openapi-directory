package openapisdk.models.operations;



public class DescribeInterconnectsResponse {
    public String contentType;
    public DescribeInterconnectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeInterconnectsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeInterconnectsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Interconnects interconnects;
    public DescribeInterconnectsResponse withInterconnects(openapisdk.models.shared.Interconnects interconnects) {
        this.interconnects = interconnects;
        return this;
    }
    public Long statusCode;
    public DescribeInterconnectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}