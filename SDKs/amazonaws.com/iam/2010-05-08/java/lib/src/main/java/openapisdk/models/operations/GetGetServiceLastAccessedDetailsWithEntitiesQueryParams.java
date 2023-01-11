package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetServiceLastAccessedDetailsWithEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetServiceLastAccessedDetailsWithEntitiesActionEnum action;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withAction(GetGetServiceLastAccessedDetailsWithEntitiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobId")
    public String jobId;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceNamespace")
    public String serviceNamespace;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withServiceNamespace(String serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum version;
    public GetGetServiceLastAccessedDetailsWithEntitiesQueryParams withVersion(GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}