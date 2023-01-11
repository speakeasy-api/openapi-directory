package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodBrandedBarcodePhpQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public GetFoodBrandedBarcodePhpQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
}