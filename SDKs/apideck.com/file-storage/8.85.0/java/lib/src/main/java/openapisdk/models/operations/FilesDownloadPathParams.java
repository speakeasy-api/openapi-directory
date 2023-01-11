package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FilesDownloadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}