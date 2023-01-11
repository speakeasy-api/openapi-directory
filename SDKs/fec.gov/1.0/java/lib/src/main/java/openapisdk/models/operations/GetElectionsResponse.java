package openapisdk.models.operations;



public class GetElectionsResponse {
    public String contentType;
    public GetElectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectionPage electionPage;
    public GetElectionsResponse withElectionPage(openapisdk.models.shared.ElectionPage electionPage) {
        this.electionPage = electionPage;
        return this;
    }
    public Long statusCode;
    public GetElectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}