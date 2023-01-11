package openapisdk.models.operations;



public class GetAggregateConformancePackComplianceSummaryResponse {
    public String contentType;
    public GetAggregateConformancePackComplianceSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAggregateConformancePackComplianceSummaryResponse getAggregateConformancePackComplianceSummaryResponse;
    public GetAggregateConformancePackComplianceSummaryResponse withGetAggregateConformancePackComplianceSummaryResponse(openapisdk.models.shared.GetAggregateConformancePackComplianceSummaryResponse getAggregateConformancePackComplianceSummaryResponse) {
        this.getAggregateConformancePackComplianceSummaryResponse = getAggregateConformancePackComplianceSummaryResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetAggregateConformancePackComplianceSummaryResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetAggregateConformancePackComplianceSummaryResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public GetAggregateConformancePackComplianceSummaryResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public GetAggregateConformancePackComplianceSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAggregateConformancePackComplianceSummaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}