package openapisdk.models.operations;



public class GetHeartbeatResponse {
    public String contentType;
    public GetHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String getHeartbeat200TextPlainString;
    public GetHeartbeatResponse withGetHeartbeat200TextPlainString(String getHeartbeat200TextPlainString) {
        this.getHeartbeat200TextPlainString = getHeartbeat200TextPlainString;
        return this;
    }
    public Long statusCode;
    public GetHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}