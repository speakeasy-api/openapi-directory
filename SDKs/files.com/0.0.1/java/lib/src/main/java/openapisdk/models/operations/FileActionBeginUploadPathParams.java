package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionBeginUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileActionBeginUploadPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}