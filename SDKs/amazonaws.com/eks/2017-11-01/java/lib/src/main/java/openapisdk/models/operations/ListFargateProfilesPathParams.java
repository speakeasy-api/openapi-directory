package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFargateProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ListFargateProfilesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}