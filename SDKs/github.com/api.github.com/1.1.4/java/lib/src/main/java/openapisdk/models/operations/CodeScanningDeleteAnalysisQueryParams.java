package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningDeleteAnalysisQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=confirm_delete")
    public String confirmDelete;
    public CodeScanningDeleteAnalysisQueryParams withConfirmDelete(String confirmDelete) {
        this.confirmDelete = confirmDelete;
        return this;
    }
}