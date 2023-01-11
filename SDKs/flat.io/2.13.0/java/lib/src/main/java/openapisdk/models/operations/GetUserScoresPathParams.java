package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserScoresPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public GetUserScoresPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}