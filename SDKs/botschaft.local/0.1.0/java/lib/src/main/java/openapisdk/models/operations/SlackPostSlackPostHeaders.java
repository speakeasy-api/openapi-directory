package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SlackPostSlackPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public SlackPostSlackPostHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}