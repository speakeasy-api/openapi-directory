package openapisdk.models.operations;



public class GetPresidentialContributionsByCandidateResponse {
    public String contentType;
    public GetPresidentialContributionsByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PresidentialByCandidatePage presidentialByCandidatePage;
    public GetPresidentialContributionsByCandidateResponse withPresidentialByCandidatePage(openapisdk.models.shared.PresidentialByCandidatePage presidentialByCandidatePage) {
        this.presidentialByCandidatePage = presidentialByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetPresidentialContributionsByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}