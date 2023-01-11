package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateEncryptionConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssociateEncryptionConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}