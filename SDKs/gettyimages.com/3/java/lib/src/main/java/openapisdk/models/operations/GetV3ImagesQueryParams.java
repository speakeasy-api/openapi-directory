package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ImageDetailFieldValuesEnum[] fields;
    public GetV3ImagesQueryParams withFields(openapisdk.models.shared.ImageDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public GetV3ImagesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}