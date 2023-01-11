package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServiceLastAccessedDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetServiceLastAccessedDetailsActionEnum action;
    public PostGetServiceLastAccessedDetailsQueryParams withAction(PostGetServiceLastAccessedDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetServiceLastAccessedDetailsVersionEnum version;
    public PostGetServiceLastAccessedDetailsQueryParams withVersion(PostGetServiceLastAccessedDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}