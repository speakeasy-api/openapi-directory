package openapisdk.models.operations;



public class GetRemoteServersResponse {
    public String contentType;
    public GetRemoteServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoteServerEntity[] remoteServerEntities;
    public GetRemoteServersResponse withRemoteServerEntities(openapisdk.models.shared.RemoteServerEntity[] remoteServerEntities) {
        this.remoteServerEntities = remoteServerEntities;
        return this;
    }
    public Long statusCode;
    public GetRemoteServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}