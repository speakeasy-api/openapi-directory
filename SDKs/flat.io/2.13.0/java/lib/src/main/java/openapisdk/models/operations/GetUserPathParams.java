package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public GetUserPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}