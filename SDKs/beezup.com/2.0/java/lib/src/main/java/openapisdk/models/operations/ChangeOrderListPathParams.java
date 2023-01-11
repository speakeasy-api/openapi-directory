package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeOrderType")
    public String changeOrderType;
    public ChangeOrderListPathParams withChangeOrderType(String changeOrderType) {
        this.changeOrderType = changeOrderType;
        return this;
    }
}