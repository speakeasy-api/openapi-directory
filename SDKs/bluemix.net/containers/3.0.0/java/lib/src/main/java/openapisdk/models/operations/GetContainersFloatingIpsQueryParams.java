package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainersFloatingIpsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetContainersFloatingIpsQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}