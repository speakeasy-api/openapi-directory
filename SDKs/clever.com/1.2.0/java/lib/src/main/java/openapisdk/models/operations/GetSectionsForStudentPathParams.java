package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionsForStudentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSectionsForStudentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}