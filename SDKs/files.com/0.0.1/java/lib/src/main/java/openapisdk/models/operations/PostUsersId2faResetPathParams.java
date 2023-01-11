package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersId2faResetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PostUsersId2faResetPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}