package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIdentityProviderConfigsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ListIdentityProviderConfigsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}