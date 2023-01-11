package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolsForSchoolAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSchoolsForSchoolAdminPathParams withId(String id) {
        this.id = id;
        return this;
    }
}