package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UsersOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}