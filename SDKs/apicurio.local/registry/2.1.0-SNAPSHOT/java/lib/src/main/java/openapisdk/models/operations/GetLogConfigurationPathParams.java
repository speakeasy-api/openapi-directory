package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logger")
    public String logger;
    public GetLogConfigurationPathParams withLogger(String logger) {
        this.logger = logger;
        return this;
    }
}