package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSshKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSshKeyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}