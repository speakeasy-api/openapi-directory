package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMediaAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetMediaAssetsQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}