package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDimensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteDimensionPathParams withName(String name) {
        this.name = name;
        return this;
    }
}