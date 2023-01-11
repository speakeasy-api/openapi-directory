package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudioMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public GetStudioMemberPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStudioMemberPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}