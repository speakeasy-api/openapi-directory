package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStudioMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public DeleteStudioMemberPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public DeleteStudioMemberPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}