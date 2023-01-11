package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCollaboratorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreCollaboratorQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}