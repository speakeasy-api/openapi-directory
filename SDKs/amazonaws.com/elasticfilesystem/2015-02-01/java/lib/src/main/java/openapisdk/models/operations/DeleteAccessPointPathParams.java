package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessPointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccessPointId")
    public String accessPointId;
    public DeleteAccessPointPathParams withAccessPointId(String accessPointId) {
        this.accessPointId = accessPointId;
        return this;
    }
}