package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetResourceInfoQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource")
    public String resource;
    public GetResourceInfoQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}