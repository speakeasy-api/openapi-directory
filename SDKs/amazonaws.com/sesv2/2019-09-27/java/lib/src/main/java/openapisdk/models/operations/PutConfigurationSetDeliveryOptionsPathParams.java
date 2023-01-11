package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetDeliveryOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public PutConfigurationSetDeliveryOptionsPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}