package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public PeopleSearchReadPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}