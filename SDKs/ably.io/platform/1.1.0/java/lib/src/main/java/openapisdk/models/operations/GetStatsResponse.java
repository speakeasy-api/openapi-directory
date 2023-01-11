package openapisdk.models.operations;



public class GetStatsResponse {
    public byte[] body;
    public GetStatsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getStats2XXApplicationJSONObject;
    public GetStatsResponse withGetStats2XxApplicationJsonObject(java.util.Map<String, Object> getStats2XXApplicationJSONObject) {
        this.getStats2XXApplicationJSONObject = getStats2XXApplicationJSONObject;
        return this;
    }
}