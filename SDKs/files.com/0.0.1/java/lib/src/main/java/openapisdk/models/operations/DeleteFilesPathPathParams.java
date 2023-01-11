package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFilesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public DeleteFilesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}