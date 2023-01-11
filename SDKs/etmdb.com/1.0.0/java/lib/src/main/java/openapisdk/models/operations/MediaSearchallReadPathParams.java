package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MediaSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public MediaSearchallReadPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}