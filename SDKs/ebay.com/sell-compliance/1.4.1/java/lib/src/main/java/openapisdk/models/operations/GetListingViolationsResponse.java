package openapisdk.models.operations;



public class GetListingViolationsResponse {
    public String contentType;
    public GetListingViolationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedComplianceViolationCollection pagedComplianceViolationCollection;
    public GetListingViolationsResponse withPagedComplianceViolationCollection(openapisdk.models.shared.PagedComplianceViolationCollection pagedComplianceViolationCollection) {
        this.pagedComplianceViolationCollection = pagedComplianceViolationCollection;
        return this;
    }
    public Long statusCode;
    public GetListingViolationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}