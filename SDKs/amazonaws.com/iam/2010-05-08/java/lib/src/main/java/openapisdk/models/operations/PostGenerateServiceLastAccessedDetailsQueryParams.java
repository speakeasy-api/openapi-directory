package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateServiceLastAccessedDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGenerateServiceLastAccessedDetailsActionEnum action;
    public PostGenerateServiceLastAccessedDetailsQueryParams withAction(PostGenerateServiceLastAccessedDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGenerateServiceLastAccessedDetailsVersionEnum version;
    public PostGenerateServiceLastAccessedDetailsQueryParams withVersion(PostGenerateServiceLastAccessedDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}