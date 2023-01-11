package openapisdk.models.operations;



public class DescribeNodeAssociationStatusResponse {
    public String contentType;
    public DescribeNodeAssociationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeNodeAssociationStatusResponse describeNodeAssociationStatusResponse;
    public DescribeNodeAssociationStatusResponse withDescribeNodeAssociationStatusResponse(openapisdk.models.shared.DescribeNodeAssociationStatusResponse describeNodeAssociationStatusResponse) {
        this.describeNodeAssociationStatusResponse = describeNodeAssociationStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeNodeAssociationStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeNodeAssociationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeNodeAssociationStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}