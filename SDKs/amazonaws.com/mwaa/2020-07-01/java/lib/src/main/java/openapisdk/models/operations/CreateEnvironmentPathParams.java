package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public CreateEnvironmentPathParams withName(String name) {
        this.name = name;
        return this;
    }
}