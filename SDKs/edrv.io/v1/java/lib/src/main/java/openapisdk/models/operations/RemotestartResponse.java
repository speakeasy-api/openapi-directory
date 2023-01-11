package openapisdk.models.operations;



public class RemotestartResponse {
    public String contentType;
    public RemotestartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemotestartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Remotestart201ApplicationJson remotestart201ApplicationJSONObject;
    public RemotestartResponse withRemotestart201ApplicationJsonObject(Remotestart201ApplicationJson remotestart201ApplicationJSONObject) {
        this.remotestart201ApplicationJSONObject = remotestart201ApplicationJSONObject;
        return this;
    }
}