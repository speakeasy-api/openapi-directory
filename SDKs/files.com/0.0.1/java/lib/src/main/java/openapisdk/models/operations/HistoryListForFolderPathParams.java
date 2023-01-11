package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HistoryListForFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public HistoryListForFolderPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}