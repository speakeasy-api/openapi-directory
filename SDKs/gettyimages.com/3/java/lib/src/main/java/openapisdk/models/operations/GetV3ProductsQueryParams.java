package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ProductFieldValuesEnum[] fields;
    public GetV3ProductsQueryParams withFields(openapisdk.models.shared.ProductFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
}