package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetCollectionQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}