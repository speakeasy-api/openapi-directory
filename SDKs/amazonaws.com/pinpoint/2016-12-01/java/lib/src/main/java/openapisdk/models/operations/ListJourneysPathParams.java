package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJourneysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public ListJourneysPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}