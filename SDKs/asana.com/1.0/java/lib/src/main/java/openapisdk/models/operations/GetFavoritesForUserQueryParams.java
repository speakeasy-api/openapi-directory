package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFavoritesForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetFavoritesForUserQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetFavoritesForUserQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_type")
    public openapisdk.models.shared.FieldsEnum resourceType;
    public GetFavoritesForUserQueryParams withResourceType(openapisdk.models.shared.FieldsEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetFavoritesForUserQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}