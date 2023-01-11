package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateMemberSessionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}