package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConfigurationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}