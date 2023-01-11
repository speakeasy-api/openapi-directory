package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningListRecentAnalysesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CodeScanningListRecentAnalysesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public CodeScanningListRecentAnalysesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public CodeScanningListRecentAnalysesQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sarif_id")
    public String sarifId;
    public CodeScanningListRecentAnalysesQueryParams withSarifId(String sarifId) {
        this.sarifId = sarifId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tool_guid")
    public String toolGuid;
    public CodeScanningListRecentAnalysesQueryParams withToolGuid(String toolGuid) {
        this.toolGuid = toolGuid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tool_name")
    public String toolName;
    public CodeScanningListRecentAnalysesQueryParams withToolName(String toolName) {
        this.toolName = toolName;
        return this;
    }
}