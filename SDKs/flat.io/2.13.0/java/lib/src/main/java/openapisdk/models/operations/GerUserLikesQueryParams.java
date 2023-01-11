package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GerUserLikesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public Boolean ids;
    public GerUserLikesQueryParams withIds(Boolean ids) {
        this.ids = ids;
        return this;
    }
}