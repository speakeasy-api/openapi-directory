package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UsersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}