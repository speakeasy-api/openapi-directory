package openapisdk.models.operations;



public class DescribeAggregateComplianceByConformancePacksResponse {
    public String contentType;
    public DescribeAggregateComplianceByConformancePacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAggregateComplianceByConformancePacksResponse describeAggregateComplianceByConformancePacksResponse;
    public DescribeAggregateComplianceByConformancePacksResponse withDescribeAggregateComplianceByConformancePacksResponse(openapisdk.models.shared.DescribeAggregateComplianceByConformancePacksResponse describeAggregateComplianceByConformancePacksResponse) {
        this.describeAggregateComplianceByConformancePacksResponse = describeAggregateComplianceByConformancePacksResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeAggregateComplianceByConformancePacksResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeAggregateComplianceByConformancePacksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public DescribeAggregateComplianceByConformancePacksResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public DescribeAggregateComplianceByConformancePacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeAggregateComplianceByConformancePacksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}