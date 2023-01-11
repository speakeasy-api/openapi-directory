package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningListAlertsInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CodeScanningListAlertsInstancesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public CodeScanningListAlertsInstancesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public CodeScanningListAlertsInstancesQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}