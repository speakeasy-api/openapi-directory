package openapisdk.models.operations;



public class GetRemoteServersIdResponse {
    public String contentType;
    public GetRemoteServersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoteServerEntity remoteServerEntity;
    public GetRemoteServersIdResponse withRemoteServerEntity(openapisdk.models.shared.RemoteServerEntity remoteServerEntity) {
        this.remoteServerEntity = remoteServerEntity;
        return this;
    }
    public Long statusCode;
    public GetRemoteServersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}