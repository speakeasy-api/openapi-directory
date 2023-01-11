package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPropertyValueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetId")
    public String assetId;
    public GetAssetPropertyValueQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyAlias")
    public String propertyAlias;
    public GetAssetPropertyValueQueryParams withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyId")
    public String propertyId;
    public GetAssetPropertyValueQueryParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
}