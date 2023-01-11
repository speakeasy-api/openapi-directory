package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ReminderProfilesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}