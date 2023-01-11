package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisassociateMemberPathParams withId(String id) {
        this.id = id;
        return this;
    }
}