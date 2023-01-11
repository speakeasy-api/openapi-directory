package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePendingMaintenanceActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePendingMaintenanceActionsActionEnum action;
    public PostDescribePendingMaintenanceActionsQueryParams withAction(PostDescribePendingMaintenanceActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribePendingMaintenanceActionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribePendingMaintenanceActionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePendingMaintenanceActionsVersionEnum version;
    public PostDescribePendingMaintenanceActionsQueryParams withVersion(PostDescribePendingMaintenanceActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}