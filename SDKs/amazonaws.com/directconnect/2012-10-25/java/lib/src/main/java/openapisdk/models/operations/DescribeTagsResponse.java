package openapisdk.models.operations;



public class DescribeTagsResponse {
    public String contentType;
    public DescribeTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTagsResponse describeTagsResponse;
    public DescribeTagsResponse withDescribeTagsResponse(openapisdk.models.shared.DescribeTagsResponse describeTagsResponse) {
        this.describeTagsResponse = describeTagsResponse;
        return this;
    }
    public Object directConnectClientException;
    public DescribeTagsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeTagsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}