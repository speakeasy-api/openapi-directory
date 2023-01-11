package openapisdk.models.operations;



public class PatchRemoteServersIdResponse {
    public String contentType;
    public PatchRemoteServersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoteServerEntity remoteServerEntity;
    public PatchRemoteServersIdResponse withRemoteServerEntity(openapisdk.models.shared.RemoteServerEntity remoteServerEntity) {
        this.remoteServerEntity = remoteServerEntity;
        return this;
    }
    public Long statusCode;
    public PatchRemoteServersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}