package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeOrderType")
    public String changeOrderType;
    public ChangeOrderListV2PathParams withChangeOrderType(String changeOrderType) {
        this.changeOrderType = changeOrderType;
        return this;
    }
}