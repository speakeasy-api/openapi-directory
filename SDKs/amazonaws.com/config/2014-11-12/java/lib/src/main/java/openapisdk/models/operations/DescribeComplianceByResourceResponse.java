package openapisdk.models.operations;



public class DescribeComplianceByResourceResponse {
    public String contentType;
    public DescribeComplianceByResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComplianceByResourceResponse describeComplianceByResourceResponse;
    public DescribeComplianceByResourceResponse withDescribeComplianceByResourceResponse(openapisdk.models.shared.DescribeComplianceByResourceResponse describeComplianceByResourceResponse) {
        this.describeComplianceByResourceResponse = describeComplianceByResourceResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeComplianceByResourceResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeComplianceByResourceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribeComplianceByResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}