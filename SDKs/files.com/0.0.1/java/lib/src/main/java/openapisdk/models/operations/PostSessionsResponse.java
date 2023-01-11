package openapisdk.models.operations;



public class PostSessionsResponse {
    public String contentType;
    public PostSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SessionEntity sessionEntity;
    public PostSessionsResponse withSessionEntity(openapisdk.models.shared.SessionEntity sessionEntity) {
        this.sessionEntity = sessionEntity;
        return this;
    }
    public Long statusCode;
    public PostSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}