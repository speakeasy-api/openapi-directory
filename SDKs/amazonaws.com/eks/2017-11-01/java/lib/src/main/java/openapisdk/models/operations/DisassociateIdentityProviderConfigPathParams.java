package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateIdentityProviderConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DisassociateIdentityProviderConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}