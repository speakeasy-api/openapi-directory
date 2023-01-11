package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSigninSigninIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=signinId")
    public Long signinId;
    public DeleteSigninSigninIdPathParams withSigninId(Long signinId) {
        this.signinId = signinId;
        return this;
    }
}