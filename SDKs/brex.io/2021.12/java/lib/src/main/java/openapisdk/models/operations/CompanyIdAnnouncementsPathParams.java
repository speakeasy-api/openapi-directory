package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdAnnouncementsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompanyIdAnnouncementsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}