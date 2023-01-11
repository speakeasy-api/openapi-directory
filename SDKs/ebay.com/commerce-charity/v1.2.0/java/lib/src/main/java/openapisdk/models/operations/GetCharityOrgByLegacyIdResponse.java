package openapisdk.models.operations;



public class GetCharityOrgByLegacyIdResponse {
    public openapisdk.models.shared.CharityOrg charityOrg;
    public GetCharityOrgByLegacyIdResponse withCharityOrg(openapisdk.models.shared.CharityOrg charityOrg) {
        this.charityOrg = charityOrg;
        return this;
    }
    public String contentType;
    public GetCharityOrgByLegacyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCharityOrgByLegacyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}