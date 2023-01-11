package openapisdk.models.operations;



public class DescribeRefreshSchemasStatusResponse {
    public String contentType;
    public DescribeRefreshSchemasStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRefreshSchemasStatusResponse describeRefreshSchemasStatusResponse;
    public DescribeRefreshSchemasStatusResponse withDescribeRefreshSchemasStatusResponse(openapisdk.models.shared.DescribeRefreshSchemasStatusResponse describeRefreshSchemasStatusResponse) {
        this.describeRefreshSchemasStatusResponse = describeRefreshSchemasStatusResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DescribeRefreshSchemasStatusResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeRefreshSchemasStatusResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeRefreshSchemasStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}