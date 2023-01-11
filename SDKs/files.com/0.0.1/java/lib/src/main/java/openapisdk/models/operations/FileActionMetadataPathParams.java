package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileActionMetadataPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}