package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSchoolPathParams withId(String id) {
        this.id = id;
        return this;
    }
}