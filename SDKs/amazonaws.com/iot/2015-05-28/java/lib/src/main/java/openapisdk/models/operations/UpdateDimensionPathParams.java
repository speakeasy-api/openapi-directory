package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDimensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public UpdateDimensionPathParams withName(String name) {
        this.name = name;
        return this;
    }
}