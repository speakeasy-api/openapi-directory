package openapisdk.models.operations;



public class GetCandidatesTotalsByOfficeByPartyResponse {
    public String contentType;
    public GetCandidatesTotalsByOfficeByPartyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidatesTotalsByOfficeByPartyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TotalByOfficeByPartyPage totalByOfficeByPartyPage;
    public GetCandidatesTotalsByOfficeByPartyResponse withTotalByOfficeByPartyPage(openapisdk.models.shared.TotalByOfficeByPartyPage totalByOfficeByPartyPage) {
        this.totalByOfficeByPartyPage = totalByOfficeByPartyPage;
        return this;
    }
}