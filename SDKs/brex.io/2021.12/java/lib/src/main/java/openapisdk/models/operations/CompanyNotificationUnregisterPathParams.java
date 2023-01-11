package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyNotificationUnregisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompanyNotificationUnregisterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}