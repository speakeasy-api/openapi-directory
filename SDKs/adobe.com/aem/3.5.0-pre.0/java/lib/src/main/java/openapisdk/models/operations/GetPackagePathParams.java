package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPackagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public GetPackagePathParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetPackagePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetPackagePathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}