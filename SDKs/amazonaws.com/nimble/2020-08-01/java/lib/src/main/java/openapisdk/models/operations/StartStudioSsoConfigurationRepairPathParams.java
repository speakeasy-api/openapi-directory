package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStudioSsoConfigurationRepairPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public StartStudioSsoConfigurationRepairPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}