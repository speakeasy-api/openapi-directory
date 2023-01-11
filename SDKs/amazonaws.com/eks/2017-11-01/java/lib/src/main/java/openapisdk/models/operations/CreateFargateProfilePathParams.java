package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFargateProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CreateFargateProfilePathParams withName(String name) {
        this.name = name;
        return this;
    }
}