package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFilesPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public DeleteFilesPathQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
}