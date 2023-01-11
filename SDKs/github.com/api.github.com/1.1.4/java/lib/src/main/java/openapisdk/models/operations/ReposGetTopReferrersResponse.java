package openapisdk.models.operations;



public class ReposGetTopReferrersResponse {
    public String contentType;
    public ReposGetTopReferrersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetTopReferrersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetTopReferrersResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ReferrerTraffic[] referrerTraffics;
    public ReposGetTopReferrersResponse withReferrerTraffics(openapisdk.models.shared.ReferrerTraffic[] referrerTraffics) {
        this.referrerTraffics = referrerTraffics;
        return this;
    }
}