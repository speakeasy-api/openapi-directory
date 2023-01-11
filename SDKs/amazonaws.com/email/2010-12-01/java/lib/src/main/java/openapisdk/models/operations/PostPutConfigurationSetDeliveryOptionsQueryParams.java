package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutConfigurationSetDeliveryOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutConfigurationSetDeliveryOptionsActionEnum action;
    public PostPutConfigurationSetDeliveryOptionsQueryParams withAction(PostPutConfigurationSetDeliveryOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutConfigurationSetDeliveryOptionsVersionEnum version;
    public PostPutConfigurationSetDeliveryOptionsQueryParams withVersion(PostPutConfigurationSetDeliveryOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}