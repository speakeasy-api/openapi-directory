package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGoalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_workspace_level")
    public Boolean isWorkspaceLevel;
    public GetGoalsQueryParams withIsWorkspaceLevel(Boolean isWorkspaceLevel) {
        this.isWorkspaceLevel = isWorkspaceLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetGoalsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetGoalsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetGoalsQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetGoalsQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=portfolio")
    public String portfolio;
    public GetGoalsQueryParams withPortfolio(String portfolio) {
        this.portfolio = portfolio;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public String project;
    public GetGoalsQueryParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetGoalsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_periods")
    public String[] timePeriods;
    public GetGoalsQueryParams withTimePeriods(String[] timePeriods) {
        this.timePeriods = timePeriods;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetGoalsQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}