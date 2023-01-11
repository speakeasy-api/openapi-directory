package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumesFsNameJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetVolumesFsNameJsonPathParams withName(String name) {
        this.name = name;
        return this;
    }
}