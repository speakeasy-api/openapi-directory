package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileDownloadPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}