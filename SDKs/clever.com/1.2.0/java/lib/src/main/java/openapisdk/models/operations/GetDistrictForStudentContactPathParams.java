package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictForStudentContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDistrictForStudentContactPathParams withId(String id) {
        this.id = id;
        return this;
    }
}