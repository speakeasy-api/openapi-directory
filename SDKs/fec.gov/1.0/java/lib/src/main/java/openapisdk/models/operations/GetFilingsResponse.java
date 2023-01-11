package openapisdk.models.operations;



public class GetFilingsResponse {
    public String contentType;
    public GetFilingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilingsPage filingsPage;
    public GetFilingsResponse withFilingsPage(openapisdk.models.shared.FilingsPage filingsPage) {
        this.filingsPage = filingsPage;
        return this;
    }
    public Long statusCode;
    public GetFilingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}