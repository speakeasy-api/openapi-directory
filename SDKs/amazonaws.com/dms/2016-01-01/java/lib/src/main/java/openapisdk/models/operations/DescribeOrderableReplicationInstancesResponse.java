package openapisdk.models.operations;



public class DescribeOrderableReplicationInstancesResponse {
    public String contentType;
    public DescribeOrderableReplicationInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrderableReplicationInstancesResponse describeOrderableReplicationInstancesResponse;
    public DescribeOrderableReplicationInstancesResponse withDescribeOrderableReplicationInstancesResponse(openapisdk.models.shared.DescribeOrderableReplicationInstancesResponse describeOrderableReplicationInstancesResponse) {
        this.describeOrderableReplicationInstancesResponse = describeOrderableReplicationInstancesResponse;
        return this;
    }
    public Long statusCode;
    public DescribeOrderableReplicationInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}