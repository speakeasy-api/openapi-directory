package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentsForSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentsForSectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}