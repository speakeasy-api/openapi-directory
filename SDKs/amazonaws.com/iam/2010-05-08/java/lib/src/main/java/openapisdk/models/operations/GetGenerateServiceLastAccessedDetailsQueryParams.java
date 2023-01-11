package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenerateServiceLastAccessedDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGenerateServiceLastAccessedDetailsActionEnum action;
    public GetGenerateServiceLastAccessedDetailsQueryParams withAction(GetGenerateServiceLastAccessedDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Arn")
    public String arn;
    public GetGenerateServiceLastAccessedDetailsQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Granularity")
    public GetGenerateServiceLastAccessedDetailsGranularityEnum granularity;
    public GetGenerateServiceLastAccessedDetailsQueryParams withGranularity(GetGenerateServiceLastAccessedDetailsGranularityEnum granularity) {
        this.granularity = granularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGenerateServiceLastAccessedDetailsVersionEnum version;
    public GetGenerateServiceLastAccessedDetailsQueryParams withVersion(GetGenerateServiceLastAccessedDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}