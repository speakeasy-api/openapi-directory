package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UsersUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}