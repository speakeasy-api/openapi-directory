package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStylesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetStylesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}