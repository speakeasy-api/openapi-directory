package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDimensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CreateDimensionPathParams withName(String name) {
        this.name = name;
        return this;
    }
}