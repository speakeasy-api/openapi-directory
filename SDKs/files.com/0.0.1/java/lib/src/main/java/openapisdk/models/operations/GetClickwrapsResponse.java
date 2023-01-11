package openapisdk.models.operations;



public class GetClickwrapsResponse {
    public openapisdk.models.shared.ClickwrapEntity[] clickwrapEntities;
    public GetClickwrapsResponse withClickwrapEntities(openapisdk.models.shared.ClickwrapEntity[] clickwrapEntities) {
        this.clickwrapEntities = clickwrapEntities;
        return this;
    }
    public String contentType;
    public GetClickwrapsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetClickwrapsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}