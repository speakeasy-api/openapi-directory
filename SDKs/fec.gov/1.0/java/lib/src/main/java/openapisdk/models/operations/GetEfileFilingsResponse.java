package openapisdk.models.operations;



public class GetEfileFilingsResponse {
    public String contentType;
    public GetEfileFilingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EFilingsPage eFilingsPage;
    public GetEfileFilingsResponse withEFilingsPage(openapisdk.models.shared.EFilingsPage eFilingsPage) {
        this.eFilingsPage = eFilingsPage;
        return this;
    }
    public Long statusCode;
    public GetEfileFilingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}