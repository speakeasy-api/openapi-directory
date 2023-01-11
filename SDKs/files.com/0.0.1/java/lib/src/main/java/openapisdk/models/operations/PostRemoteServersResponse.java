package openapisdk.models.operations;



public class PostRemoteServersResponse {
    public String contentType;
    public PostRemoteServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoteServerEntity remoteServerEntity;
    public PostRemoteServersResponse withRemoteServerEntity(openapisdk.models.shared.RemoteServerEntity remoteServerEntity) {
        this.remoteServerEntity = remoteServerEntity;
        return this;
    }
    public Long statusCode;
    public PostRemoteServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}