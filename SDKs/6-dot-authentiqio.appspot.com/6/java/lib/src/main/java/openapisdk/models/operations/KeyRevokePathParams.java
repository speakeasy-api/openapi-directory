package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PK")
    public String pk;
    public KeyRevokePathParams withPk(String pk) {
        this.pk = pk;
        return this;
    }
}