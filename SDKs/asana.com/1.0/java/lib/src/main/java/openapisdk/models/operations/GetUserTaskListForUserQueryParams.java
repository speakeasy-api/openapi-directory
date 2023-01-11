package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserTaskListForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetUserTaskListForUserQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetUserTaskListForUserQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetUserTaskListForUserQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}