package openapisdk.models.operations;



public class DescribeReturnShippingLabelResponse {
    public Object conflictException;
    public DescribeReturnShippingLabelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeReturnShippingLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReturnShippingLabelResult describeReturnShippingLabelResult;
    public DescribeReturnShippingLabelResponse withDescribeReturnShippingLabelResult(openapisdk.models.shared.DescribeReturnShippingLabelResult describeReturnShippingLabelResult) {
        this.describeReturnShippingLabelResult = describeReturnShippingLabelResult;
        return this;
    }
    public Object invalidJobStateException;
    public DescribeReturnShippingLabelResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public DescribeReturnShippingLabelResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public DescribeReturnShippingLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}