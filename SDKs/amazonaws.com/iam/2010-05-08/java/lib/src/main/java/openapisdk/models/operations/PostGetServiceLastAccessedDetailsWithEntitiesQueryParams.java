package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServiceLastAccessedDetailsWithEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetServiceLastAccessedDetailsWithEntitiesActionEnum action;
    public PostGetServiceLastAccessedDetailsWithEntitiesQueryParams withAction(PostGetServiceLastAccessedDetailsWithEntitiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum version;
    public PostGetServiceLastAccessedDetailsWithEntitiesQueryParams withVersion(PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}