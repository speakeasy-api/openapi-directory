package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSigninSigninIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=signinId")
    public Long signinId;
    public PutSigninSigninIdPathParams withSigninId(Long signinId) {
        this.signinId = signinId;
        return this;
    }
}