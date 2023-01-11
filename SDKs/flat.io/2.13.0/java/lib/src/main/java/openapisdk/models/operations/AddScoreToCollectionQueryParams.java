package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreToCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public AddScoreToCollectionQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}