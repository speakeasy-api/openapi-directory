package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public ProductOrderPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subjectId")
    public String subjectId;
    public ProductOrderPathParams withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}