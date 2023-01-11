package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningListAlertsForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CodeScanningListAlertsForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public CodeScanningListAlertsForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public CodeScanningListAlertsForRepoQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.CodeScanningAlertStateEnum state;
    public CodeScanningListAlertsForRepoQueryParams withState(openapisdk.models.shared.CodeScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tool_guid")
    public String toolGuid;
    public CodeScanningListAlertsForRepoQueryParams withToolGuid(String toolGuid) {
        this.toolGuid = toolGuid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tool_name")
    public String toolName;
    public CodeScanningListAlertsForRepoQueryParams withToolName(String toolName) {
        this.toolName = toolName;
        return this;
    }
}