package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLogConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logger")
    public String logger;
    public RemoveLogConfigurationPathParams withLogger(String logger) {
        this.logger = logger;
        return this;
    }
}