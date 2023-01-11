package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fsName")
    public String fsName;
    public PostVolumesCreateQueryParams withFsName(String fsName) {
        this.fsName = fsName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostVolumesCreateQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}