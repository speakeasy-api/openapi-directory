package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyAnnouncementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompanyAnnouncementPathParams withId(String id) {
        this.id = id;
        return this;
    }
}