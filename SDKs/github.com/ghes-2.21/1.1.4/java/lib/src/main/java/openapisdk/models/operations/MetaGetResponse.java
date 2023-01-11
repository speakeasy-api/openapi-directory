package openapisdk.models.operations;



public class MetaGetResponse {
    public String contentType;
    public MetaGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MetaGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiOverview apiOverview;
    public MetaGetResponse withApiOverview(openapisdk.models.shared.ApiOverview apiOverview) {
        this.apiOverview = apiOverview;
        return this;
    }
}