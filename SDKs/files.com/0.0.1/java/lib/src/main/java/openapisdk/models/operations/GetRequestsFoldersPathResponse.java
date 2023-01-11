package openapisdk.models.operations;



public class GetRequestsFoldersPathResponse {
    public String contentType;
    public GetRequestsFoldersPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RequestEntity[] requestEntities;
    public GetRequestsFoldersPathResponse withRequestEntities(openapisdk.models.shared.RequestEntity[] requestEntities) {
        this.requestEntities = requestEntities;
        return this;
    }
    public Long statusCode;
    public GetRequestsFoldersPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}