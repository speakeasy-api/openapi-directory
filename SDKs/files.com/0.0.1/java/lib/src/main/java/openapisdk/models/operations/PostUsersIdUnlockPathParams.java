package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersIdUnlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PostUsersIdUnlockPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}