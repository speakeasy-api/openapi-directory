package openapisdk.models.operations;



public class GetComplianceSummaryResponse {
    public Object constraintViolationException;
    public GetComplianceSummaryResponse withConstraintViolationException(Object constraintViolationException) {
        this.constraintViolationException = constraintViolationException;
        return this;
    }
    public String contentType;
    public GetComplianceSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceSummaryOutput getComplianceSummaryOutput;
    public GetComplianceSummaryResponse withGetComplianceSummaryOutput(openapisdk.models.shared.GetComplianceSummaryOutput getComplianceSummaryOutput) {
        this.getComplianceSummaryOutput = getComplianceSummaryOutput;
        return this;
    }
    public Object internalServiceException;
    public GetComplianceSummaryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public GetComplianceSummaryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public GetComplianceSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetComplianceSummaryResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}