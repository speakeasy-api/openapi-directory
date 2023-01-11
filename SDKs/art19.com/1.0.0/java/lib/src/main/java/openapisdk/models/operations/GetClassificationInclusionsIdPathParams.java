package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClassificationInclusionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetClassificationInclusionsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}