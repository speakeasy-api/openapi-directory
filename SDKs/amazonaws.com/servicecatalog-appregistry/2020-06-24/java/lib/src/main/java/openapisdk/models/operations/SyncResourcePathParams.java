package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SyncResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public SyncResourcePathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceType")
    public SyncResourceResourceTypeEnum resourceType;
    public SyncResourcePathParams withResourceType(SyncResourceResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}