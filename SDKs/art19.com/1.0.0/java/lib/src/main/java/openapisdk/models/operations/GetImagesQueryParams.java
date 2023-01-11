package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetImagesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}