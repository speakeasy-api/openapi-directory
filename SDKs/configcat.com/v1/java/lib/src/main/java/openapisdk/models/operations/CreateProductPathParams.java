package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateProductPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}