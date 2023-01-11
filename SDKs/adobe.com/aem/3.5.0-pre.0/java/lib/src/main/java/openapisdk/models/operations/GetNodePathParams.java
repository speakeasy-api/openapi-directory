package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetNodePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetNodePathParams withPath(String path) {
        this.path = path;
        return this;
    }
}