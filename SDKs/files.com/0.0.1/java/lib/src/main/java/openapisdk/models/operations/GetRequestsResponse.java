package openapisdk.models.operations;



public class GetRequestsResponse {
    public String contentType;
    public GetRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RequestEntity[] requestEntities;
    public GetRequestsResponse withRequestEntities(openapisdk.models.shared.RequestEntity[] requestEntities) {
        this.requestEntities = requestEntities;
        return this;
    }
    public Long statusCode;
    public GetRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}