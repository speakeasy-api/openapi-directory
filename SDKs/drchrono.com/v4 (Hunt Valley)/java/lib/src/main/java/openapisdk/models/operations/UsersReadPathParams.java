package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UsersReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}