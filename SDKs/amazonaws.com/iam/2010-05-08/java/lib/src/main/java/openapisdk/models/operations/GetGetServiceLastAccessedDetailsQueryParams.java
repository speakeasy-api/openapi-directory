package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetServiceLastAccessedDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetServiceLastAccessedDetailsActionEnum action;
    public GetGetServiceLastAccessedDetailsQueryParams withAction(GetGetServiceLastAccessedDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobId")
    public String jobId;
    public GetGetServiceLastAccessedDetailsQueryParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetServiceLastAccessedDetailsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetGetServiceLastAccessedDetailsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetServiceLastAccessedDetailsVersionEnum version;
    public GetGetServiceLastAccessedDetailsQueryParams withVersion(GetGetServiceLastAccessedDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}