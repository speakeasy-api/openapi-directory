package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectMembershipsForProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetProjectMembershipsForProjectQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetProjectMembershipsForProjectQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetProjectMembershipsForProjectQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetProjectMembershipsForProjectQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;
    public GetProjectMembershipsForProjectQueryParams withUser(String user) {
        this.user = user;
        return this;
    }
}