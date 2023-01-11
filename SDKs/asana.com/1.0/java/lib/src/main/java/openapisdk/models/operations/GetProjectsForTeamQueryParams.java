package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectsForTeamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public GetProjectsForTeamQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetProjectsForTeamQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetProjectsForTeamQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetProjectsForTeamQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetProjectsForTeamQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}