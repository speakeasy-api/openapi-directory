package openapisdk.models.operations;



public class DescribeConformancePackComplianceResponse {
    public String contentType;
    public DescribeConformancePackComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConformancePackComplianceResponse describeConformancePackComplianceResponse;
    public DescribeConformancePackComplianceResponse withDescribeConformancePackComplianceResponse(openapisdk.models.shared.DescribeConformancePackComplianceResponse describeConformancePackComplianceResponse) {
        this.describeConformancePackComplianceResponse = describeConformancePackComplianceResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeConformancePackComplianceResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConformancePackComplianceResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConformancePackComplianceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleInConformancePackException;
    public DescribeConformancePackComplianceResponse withNoSuchConfigRuleInConformancePackException(Object noSuchConfigRuleInConformancePackException) {
        this.noSuchConfigRuleInConformancePackException = noSuchConfigRuleInConformancePackException;
        return this;
    }
    public Object noSuchConformancePackException;
    public DescribeConformancePackComplianceResponse withNoSuchConformancePackException(Object noSuchConformancePackException) {
        this.noSuchConformancePackException = noSuchConformancePackException;
        return this;
    }
    public Long statusCode;
    public DescribeConformancePackComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}