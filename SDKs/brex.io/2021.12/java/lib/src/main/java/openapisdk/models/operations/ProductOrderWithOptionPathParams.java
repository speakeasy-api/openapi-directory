package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderWithOptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=option")
    public String option;
    public ProductOrderWithOptionPathParams withOption(String option) {
        this.option = option;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public ProductOrderWithOptionPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subjectId")
    public String subjectId;
    public ProductOrderWithOptionPathParams withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}