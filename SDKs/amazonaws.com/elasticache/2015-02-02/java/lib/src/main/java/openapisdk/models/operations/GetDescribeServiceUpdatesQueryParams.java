package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeServiceUpdatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeServiceUpdatesActionEnum action;
    public GetDescribeServiceUpdatesQueryParams withAction(GetDescribeServiceUpdatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeServiceUpdatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeServiceUpdatesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateName")
    public String serviceUpdateName;
    public GetDescribeServiceUpdatesQueryParams withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateStatus")
    public openapisdk.models.shared.ServiceUpdateStatusEnum[] serviceUpdateStatus;
    public GetDescribeServiceUpdatesQueryParams withServiceUpdateStatus(openapisdk.models.shared.ServiceUpdateStatusEnum[] serviceUpdateStatus) {
        this.serviceUpdateStatus = serviceUpdateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeServiceUpdatesVersionEnum version;
    public GetDescribeServiceUpdatesQueryParams withVersion(GetDescribeServiceUpdatesVersionEnum version) {
        this.version = version;
        return this;
    }
}