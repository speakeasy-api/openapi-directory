package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GerUserLikesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public GerUserLikesPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}