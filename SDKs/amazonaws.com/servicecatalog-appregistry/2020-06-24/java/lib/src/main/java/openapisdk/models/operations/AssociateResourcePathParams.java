package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public AssociateResourcePathParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public AssociateResourcePathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceType")
    public AssociateResourceResourceTypeEnum resourceType;
    public AssociateResourcePathParams withResourceType(AssociateResourceResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}