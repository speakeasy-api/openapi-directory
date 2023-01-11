package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCollaboratorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreCollaboratorsQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}