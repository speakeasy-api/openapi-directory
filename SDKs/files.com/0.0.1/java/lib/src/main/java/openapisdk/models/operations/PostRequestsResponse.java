package openapisdk.models.operations;



public class PostRequestsResponse {
    public String contentType;
    public PostRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RequestEntity requestEntity;
    public PostRequestsResponse withRequestEntity(openapisdk.models.shared.RequestEntity requestEntity) {
        this.requestEntity = requestEntity;
        return this;
    }
    public Long statusCode;
    public PostRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}