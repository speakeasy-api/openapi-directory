package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessDelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public AccessDelPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}