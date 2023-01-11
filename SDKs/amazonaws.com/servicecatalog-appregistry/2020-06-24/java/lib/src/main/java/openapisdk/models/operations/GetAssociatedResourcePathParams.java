package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociatedResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public GetAssociatedResourcePathParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GetAssociatedResourcePathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceType")
    public GetAssociatedResourceResourceTypeEnum resourceType;
    public GetAssociatedResourcePathParams withResourceType(GetAssociatedResourceResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}