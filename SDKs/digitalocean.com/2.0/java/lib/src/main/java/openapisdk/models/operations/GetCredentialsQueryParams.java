package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expiry_seconds")
    public Long expirySeconds;
    public GetCredentialsQueryParams withExpirySeconds(Long expirySeconds) {
        this.expirySeconds = expirySeconds;
        return this;
    }
}