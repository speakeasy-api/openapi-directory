package openapisdk.models.operations;



public class GetCharityOrgResponse {
    public openapisdk.models.shared.CharityOrg charityOrg;
    public GetCharityOrgResponse withCharityOrg(openapisdk.models.shared.CharityOrg charityOrg) {
        this.charityOrg = charityOrg;
        return this;
    }
    public String contentType;
    public GetCharityOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCharityOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}