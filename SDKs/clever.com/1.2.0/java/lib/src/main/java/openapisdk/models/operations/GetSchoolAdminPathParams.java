package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSchoolAdminPathParams withId(String id) {
        this.id = id;
        return this;
    }
}