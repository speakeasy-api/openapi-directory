package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVolumesNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteVolumesNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}