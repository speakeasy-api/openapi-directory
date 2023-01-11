package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFargateProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fargateProfileName")
    public String fargateProfileName;
    public DeleteFargateProfilePathParams withFargateProfileName(String fargateProfileName) {
        this.fargateProfileName = fargateProfileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteFargateProfilePathParams withName(String name) {
        this.name = name;
        return this;
    }
}