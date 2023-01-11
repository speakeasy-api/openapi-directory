package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizableId")
    public String authorizableId;
    public PostAuthorizableKeystorePathParams withAuthorizableId(String authorizableId) {
        this.authorizableId = authorizableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intermediatePath")
    public String intermediatePath;
    public PostAuthorizableKeystorePathParams withIntermediatePath(String intermediatePath) {
        this.intermediatePath = intermediatePath;
        return this;
    }
}