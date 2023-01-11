package openapisdk.models.operations;



public class GetPresidentialCoverageEndDateResponse {
    public String contentType;
    public GetPresidentialCoverageEndDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PresidentialCoveragePage presidentialCoveragePage;
    public GetPresidentialCoverageEndDateResponse withPresidentialCoveragePage(openapisdk.models.shared.PresidentialCoveragePage presidentialCoveragePage) {
        this.presidentialCoveragePage = presidentialCoveragePage;
        return this;
    }
    public Long statusCode;
    public GetPresidentialCoverageEndDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}