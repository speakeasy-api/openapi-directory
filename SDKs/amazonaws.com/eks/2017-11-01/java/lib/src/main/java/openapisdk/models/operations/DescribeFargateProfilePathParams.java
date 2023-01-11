package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFargateProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fargateProfileName")
    public String fargateProfileName;
    public DescribeFargateProfilePathParams withFargateProfileName(String fargateProfileName) {
        this.fargateProfileName = fargateProfileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DescribeFargateProfilePathParams withName(String name) {
        this.name = name;
        return this;
    }
}