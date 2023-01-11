package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainersJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public String all;
    public GetContainersJsonQueryParams withAll(String all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String filters;
    public GetContainersJsonQueryParams withFilters(String filters) {
        this.filters = filters;
        return this;
    }
}