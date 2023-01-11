package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeletePublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_ids")
    public String keyIds;
    public EnterpriseAdminDeletePublicKeyPathParams withKeyIds(String keyIds) {
        this.keyIds = keyIds;
        return this;
    }
}