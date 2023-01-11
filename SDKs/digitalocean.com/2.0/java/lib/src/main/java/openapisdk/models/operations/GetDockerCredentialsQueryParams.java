package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDockerCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expiry_seconds")
    public Long expirySeconds;
    public GetDockerCredentialsQueryParams withExpirySeconds(Long expirySeconds) {
        this.expirySeconds = expirySeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=read_write")
    public Boolean readWrite;
    public GetDockerCredentialsQueryParams withReadWrite(Boolean readWrite) {
        this.readWrite = readWrite;
        return this;
    }
}