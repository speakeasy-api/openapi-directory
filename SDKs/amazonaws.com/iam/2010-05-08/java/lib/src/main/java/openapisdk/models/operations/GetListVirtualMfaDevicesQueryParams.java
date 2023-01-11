package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListVirtualMfaDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListVirtualMfaDevicesActionEnum action;
    public GetListVirtualMfaDevicesQueryParams withAction(GetListVirtualMfaDevicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssignmentStatus")
    public GetListVirtualMfaDevicesAssignmentStatusEnum assignmentStatus;
    public GetListVirtualMfaDevicesQueryParams withAssignmentStatus(GetListVirtualMfaDevicesAssignmentStatusEnum assignmentStatus) {
        this.assignmentStatus = assignmentStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListVirtualMfaDevicesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListVirtualMfaDevicesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListVirtualMfaDevicesVersionEnum version;
    public GetListVirtualMfaDevicesQueryParams withVersion(GetListVirtualMfaDevicesVersionEnum version) {
        this.version = version;
        return this;
    }
}