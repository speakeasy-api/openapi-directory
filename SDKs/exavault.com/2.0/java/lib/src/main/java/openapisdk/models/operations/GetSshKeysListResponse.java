package openapisdk.models.operations;



public class GetSshKeysListResponse {
    public String contentType;
    public GetSshKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshKeyCollectionResponse sshKeyCollectionResponse;
    public GetSshKeysListResponse withSshKeyCollectionResponse(openapisdk.models.shared.SshKeyCollectionResponse sshKeyCollectionResponse) {
        this.sshKeyCollectionResponse = sshKeyCollectionResponse;
        return this;
    }
    public Long statusCode;
    public GetSshKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}