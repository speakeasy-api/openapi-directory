package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileCommentListForPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public FileCommentListForPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}