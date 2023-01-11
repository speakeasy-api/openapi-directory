package openapisdk.models.operations;



public class GetClickwrapsIdResponse {
    public openapisdk.models.shared.ClickwrapEntity clickwrapEntity;
    public GetClickwrapsIdResponse withClickwrapEntity(openapisdk.models.shared.ClickwrapEntity clickwrapEntity) {
        this.clickwrapEntity = clickwrapEntity;
        return this;
    }
    public String contentType;
    public GetClickwrapsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetClickwrapsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}