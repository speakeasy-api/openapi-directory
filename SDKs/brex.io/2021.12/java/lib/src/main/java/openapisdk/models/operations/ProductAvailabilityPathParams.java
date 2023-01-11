package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductAvailabilityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public ProductAvailabilityPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subjectId")
    public String subjectId;
    public ProductAvailabilityPathParams withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}