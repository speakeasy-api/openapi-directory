package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRequestsFoldersPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetRequestsFoldersPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}