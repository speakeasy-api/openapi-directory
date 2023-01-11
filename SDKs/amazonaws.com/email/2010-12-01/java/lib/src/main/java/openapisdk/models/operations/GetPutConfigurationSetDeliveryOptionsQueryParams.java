package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutConfigurationSetDeliveryOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutConfigurationSetDeliveryOptionsActionEnum action;
    public GetPutConfigurationSetDeliveryOptionsQueryParams withAction(GetPutConfigurationSetDeliveryOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetPutConfigurationSetDeliveryOptionsQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeliveryOptions")
    public GetPutConfigurationSetDeliveryOptionsDeliveryOptions deliveryOptions;
    public GetPutConfigurationSetDeliveryOptionsQueryParams withDeliveryOptions(GetPutConfigurationSetDeliveryOptionsDeliveryOptions deliveryOptions) {
        this.deliveryOptions = deliveryOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutConfigurationSetDeliveryOptionsVersionEnum version;
    public GetPutConfigurationSetDeliveryOptionsQueryParams withVersion(GetPutConfigurationSetDeliveryOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}