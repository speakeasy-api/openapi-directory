package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScoreFromCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public DeleteScoreFromCollectionQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}