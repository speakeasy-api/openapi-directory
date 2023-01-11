package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductNotifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=notifierId")
    public String notifierId;
    public ProductNotifierPathParams withNotifierId(String notifierId) {
        this.notifierId = notifierId;
        return this;
    }
}