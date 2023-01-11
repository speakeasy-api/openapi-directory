package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileActionCopyPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}