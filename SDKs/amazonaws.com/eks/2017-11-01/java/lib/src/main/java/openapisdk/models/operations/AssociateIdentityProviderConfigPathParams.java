package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateIdentityProviderConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssociateIdentityProviderConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}