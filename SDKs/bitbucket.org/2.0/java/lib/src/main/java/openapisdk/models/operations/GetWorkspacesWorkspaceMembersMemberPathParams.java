package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceMembersMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member")
    public String member;
    public GetWorkspacesWorkspaceMembersMemberPathParams withMember(String member) {
        this.member = member;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspaceMembersMemberPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}