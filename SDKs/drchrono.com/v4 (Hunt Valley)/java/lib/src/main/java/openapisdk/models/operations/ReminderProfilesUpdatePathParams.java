package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ReminderProfilesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}