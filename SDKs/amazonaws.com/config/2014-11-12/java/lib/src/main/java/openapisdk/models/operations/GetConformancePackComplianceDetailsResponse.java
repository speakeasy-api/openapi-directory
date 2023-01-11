package openapisdk.models.operations;



public class GetConformancePackComplianceDetailsResponse {
    public String contentType;
    public GetConformancePackComplianceDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConformancePackComplianceDetailsResponse getConformancePackComplianceDetailsResponse;
    public GetConformancePackComplianceDetailsResponse withGetConformancePackComplianceDetailsResponse(openapisdk.models.shared.GetConformancePackComplianceDetailsResponse getConformancePackComplianceDetailsResponse) {
        this.getConformancePackComplianceDetailsResponse = getConformancePackComplianceDetailsResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetConformancePackComplianceDetailsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetConformancePackComplianceDetailsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetConformancePackComplianceDetailsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleInConformancePackException;
    public GetConformancePackComplianceDetailsResponse withNoSuchConfigRuleInConformancePackException(Object noSuchConfigRuleInConformancePackException) {
        this.noSuchConfigRuleInConformancePackException = noSuchConfigRuleInConformancePackException;
        return this;
    }
    public Object noSuchConformancePackException;
    public GetConformancePackComplianceDetailsResponse withNoSuchConformancePackException(Object noSuchConformancePackException) {
        this.noSuchConformancePackException = noSuchConformancePackException;
        return this;
    }
    public Long statusCode;
    public GetConformancePackComplianceDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}