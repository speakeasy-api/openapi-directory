package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumesNameJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetVolumesNameJsonPathParams withName(String name) {
        this.name = name;
        return this;
    }
}