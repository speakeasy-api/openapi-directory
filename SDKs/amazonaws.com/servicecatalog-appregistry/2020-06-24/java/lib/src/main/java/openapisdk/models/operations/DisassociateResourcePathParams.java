package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public DisassociateResourcePathParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DisassociateResourcePathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceType")
    public DisassociateResourceResourceTypeEnum resourceType;
    public DisassociateResourcePathParams withResourceType(DisassociateResourceResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}