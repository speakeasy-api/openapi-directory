package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAddonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CreateAddonPathParams withName(String name) {
        this.name = name;
        return this;
    }
}