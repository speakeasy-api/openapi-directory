package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStylesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public DeleteStylesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}