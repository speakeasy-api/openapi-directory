package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ImageDetailFieldValuesEnum[] fields;
    public GetV3ImagesIdQueryParams withFields(openapisdk.models.shared.ImageDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
}