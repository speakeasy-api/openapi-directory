package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EcosystemsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public EcosystemsOnePathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
}