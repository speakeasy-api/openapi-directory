package openapisdk.models.operations;



public class GetPresidentialContributionsBySizeResponse {
    public String contentType;
    public GetPresidentialContributionsBySizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PresidentialBySizePage presidentialBySizePage;
    public GetPresidentialContributionsBySizeResponse withPresidentialBySizePage(openapisdk.models.shared.PresidentialBySizePage presidentialBySizePage) {
        this.presidentialBySizePage = presidentialBySizePage;
        return this;
    }
    public Long statusCode;
    public GetPresidentialContributionsBySizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}