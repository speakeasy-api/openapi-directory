package openapisdk.models.operations;



public class DescribeConnectionLoaResponse {
    public String contentType;
    public DescribeConnectionLoaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectionLoaResponse describeConnectionLoaResponse;
    public DescribeConnectionLoaResponse withDescribeConnectionLoaResponse(openapisdk.models.shared.DescribeConnectionLoaResponse describeConnectionLoaResponse) {
        this.describeConnectionLoaResponse = describeConnectionLoaResponse;
        return this;
    }
    public Object directConnectClientException;
    public DescribeConnectionLoaResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeConnectionLoaResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionLoaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}