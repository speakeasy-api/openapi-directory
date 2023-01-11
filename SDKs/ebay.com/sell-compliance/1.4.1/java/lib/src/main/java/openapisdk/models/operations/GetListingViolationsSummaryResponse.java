package openapisdk.models.operations;



public class GetListingViolationsSummaryResponse {
    public openapisdk.models.shared.ComplianceSummary complianceSummary;
    public GetListingViolationsSummaryResponse withComplianceSummary(openapisdk.models.shared.ComplianceSummary complianceSummary) {
        this.complianceSummary = complianceSummary;
        return this;
    }
    public String contentType;
    public GetListingViolationsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListingViolationsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}