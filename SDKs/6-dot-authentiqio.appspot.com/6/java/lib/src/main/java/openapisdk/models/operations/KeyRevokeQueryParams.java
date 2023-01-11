package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyRevokeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret")
    public String secret;
    public KeyRevokeQueryParams withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}