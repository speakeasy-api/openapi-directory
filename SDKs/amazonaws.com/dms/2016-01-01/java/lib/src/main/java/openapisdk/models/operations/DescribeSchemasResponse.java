package openapisdk.models.operations;



public class DescribeSchemasResponse {
    public String contentType;
    public DescribeSchemasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSchemasResponse describeSchemasResponse;
    public DescribeSchemasResponse withDescribeSchemasResponse(openapisdk.models.shared.DescribeSchemasResponse describeSchemasResponse) {
        this.describeSchemasResponse = describeSchemasResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DescribeSchemasResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeSchemasResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeSchemasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}