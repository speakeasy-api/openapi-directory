package openapisdk.models.operations;



public class DescribeReplicationInstanceTaskLogsResponse {
    public String contentType;
    public DescribeReplicationInstanceTaskLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationInstanceTaskLogsResponse describeReplicationInstanceTaskLogsResponse;
    public DescribeReplicationInstanceTaskLogsResponse withDescribeReplicationInstanceTaskLogsResponse(openapisdk.models.shared.DescribeReplicationInstanceTaskLogsResponse describeReplicationInstanceTaskLogsResponse) {
        this.describeReplicationInstanceTaskLogsResponse = describeReplicationInstanceTaskLogsResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DescribeReplicationInstanceTaskLogsResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationInstanceTaskLogsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationInstanceTaskLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}