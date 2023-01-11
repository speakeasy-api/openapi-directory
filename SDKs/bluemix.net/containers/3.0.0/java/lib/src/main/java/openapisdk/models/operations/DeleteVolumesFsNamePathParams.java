package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVolumesFsNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteVolumesFsNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}