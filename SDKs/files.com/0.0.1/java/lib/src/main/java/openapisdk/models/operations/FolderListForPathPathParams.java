package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FolderListForPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FolderListForPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}