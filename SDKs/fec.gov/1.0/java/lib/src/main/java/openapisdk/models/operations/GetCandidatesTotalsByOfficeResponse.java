package openapisdk.models.operations;



public class GetCandidatesTotalsByOfficeResponse {
    public String contentType;
    public GetCandidatesTotalsByOfficeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidatesTotalsByOfficeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TotalByOfficePage totalByOfficePage;
    public GetCandidatesTotalsByOfficeResponse withTotalByOfficePage(openapisdk.models.shared.TotalByOfficePage totalByOfficePage) {
        this.totalByOfficePage = totalByOfficePage;
        return this;
    }
}