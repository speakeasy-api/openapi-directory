package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGifsByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public GetGifsByIdQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}