package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizableKeystorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizableId")
    public String authorizableId;
    public GetAuthorizableKeystorePathParams withAuthorizableId(String authorizableId) {
        this.authorizableId = authorizableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intermediatePath")
    public String intermediatePath;
    public GetAuthorizableKeystorePathParams withIntermediatePath(String intermediatePath) {
        this.intermediatePath = intermediatePath;
        return this;
    }
}