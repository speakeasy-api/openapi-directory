package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TypeaheadForWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public TypeaheadForWorkspaceQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public TypeaheadForWorkspaceQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public TypeaheadForWorkspaceQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public TypeaheadForWorkspaceQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_type")
    public openapisdk.models.shared.WorkspacePathGidEnum resourceType;
    public TypeaheadForWorkspaceQueryParams withResourceType(openapisdk.models.shared.WorkspacePathGidEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.WorkspacePathGidEnum type;
    public TypeaheadForWorkspaceQueryParams withType(openapisdk.models.shared.WorkspacePathGidEnum type) {
        this.type = type;
        return this;
    }
}