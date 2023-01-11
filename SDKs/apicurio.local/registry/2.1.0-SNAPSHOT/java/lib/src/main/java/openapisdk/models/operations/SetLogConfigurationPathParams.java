package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetLogConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logger")
    public String logger;
    public SetLogConfigurationPathParams withLogger(String logger) {
        this.logger = logger;
        return this;
    }
}