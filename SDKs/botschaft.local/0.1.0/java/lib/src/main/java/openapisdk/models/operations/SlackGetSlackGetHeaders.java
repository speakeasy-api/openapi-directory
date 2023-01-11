package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SlackGetSlackGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public SlackGetSlackGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}