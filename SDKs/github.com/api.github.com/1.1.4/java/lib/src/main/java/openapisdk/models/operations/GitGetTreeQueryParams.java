package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitGetTreeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public String recursive;
    public GitGetTreeQueryParams withRecursive(String recursive) {
        this.recursive = recursive;
        return this;
    }
}