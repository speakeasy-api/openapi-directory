package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PostVolumesNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}