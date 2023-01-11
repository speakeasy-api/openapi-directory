package openapisdk.models.operations;



public class GetPresidentialContributionsByStateResponse {
    public String contentType;
    public GetPresidentialContributionsByStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PresidentialByStatePage presidentialByStatePage;
    public GetPresidentialContributionsByStateResponse withPresidentialByStatePage(openapisdk.models.shared.PresidentialByStatePage presidentialByStatePage) {
        this.presidentialByStatePage = presidentialByStatePage;
        return this;
    }
    public Long statusCode;
    public GetPresidentialContributionsByStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}