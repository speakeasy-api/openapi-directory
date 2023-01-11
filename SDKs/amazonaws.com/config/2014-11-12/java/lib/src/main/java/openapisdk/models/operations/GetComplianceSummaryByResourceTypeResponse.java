package openapisdk.models.operations;



public class GetComplianceSummaryByResourceTypeResponse {
    public String contentType;
    public GetComplianceSummaryByResourceTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceSummaryByResourceTypeResponse getComplianceSummaryByResourceTypeResponse;
    public GetComplianceSummaryByResourceTypeResponse withGetComplianceSummaryByResourceTypeResponse(openapisdk.models.shared.GetComplianceSummaryByResourceTypeResponse getComplianceSummaryByResourceTypeResponse) {
        this.getComplianceSummaryByResourceTypeResponse = getComplianceSummaryByResourceTypeResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetComplianceSummaryByResourceTypeResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public GetComplianceSummaryByResourceTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}