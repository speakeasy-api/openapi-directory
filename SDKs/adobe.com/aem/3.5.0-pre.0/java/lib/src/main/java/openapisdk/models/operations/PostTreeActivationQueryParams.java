package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTreeActivationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignoredeactivated")
    public Boolean ignoredeactivated;
    public PostTreeActivationQueryParams withIgnoredeactivated(Boolean ignoredeactivated) {
        this.ignoredeactivated = ignoredeactivated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlymodified")
    public Boolean onlymodified;
    public PostTreeActivationQueryParams withOnlymodified(Boolean onlymodified) {
        this.onlymodified = onlymodified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public PostTreeActivationQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
}