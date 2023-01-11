package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateOAuth2SessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public AccountCreateOAuth2SessionPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}