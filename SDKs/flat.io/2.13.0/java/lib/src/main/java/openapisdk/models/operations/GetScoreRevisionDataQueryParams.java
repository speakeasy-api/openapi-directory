package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreRevisionDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyCached")
    public Boolean onlyCached;
    public GetScoreRevisionDataQueryParams withOnlyCached(Boolean onlyCached) {
        this.onlyCached = onlyCached;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parts")
    public String parts;
    public GetScoreRevisionDataQueryParams withParts(String parts) {
        this.parts = parts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreRevisionDataQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public Boolean url;
    public GetScoreRevisionDataQueryParams withUrl(Boolean url) {
        this.url = url;
        return this;
    }
}