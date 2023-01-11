package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKubeconfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expiry_seconds")
    public Long expirySeconds;
    public GetKubeconfigQueryParams withExpirySeconds(Long expirySeconds) {
        this.expirySeconds = expirySeconds;
        return this;
    }
}