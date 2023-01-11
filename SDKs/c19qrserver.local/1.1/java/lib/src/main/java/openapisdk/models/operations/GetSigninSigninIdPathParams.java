package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigninSigninIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=signinId")
    public Long signinId;
    public GetSigninSigninIdPathParams withSigninId(Long signinId) {
        this.signinId = signinId;
        return this;
    }
}