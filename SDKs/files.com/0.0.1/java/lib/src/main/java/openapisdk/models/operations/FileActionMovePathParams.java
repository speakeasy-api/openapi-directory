package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileActionMovePathParams withPath(String path) {
        this.path = path;
        return this;
    }
}