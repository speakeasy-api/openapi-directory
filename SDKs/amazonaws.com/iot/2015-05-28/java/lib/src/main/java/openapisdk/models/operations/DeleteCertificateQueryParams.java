package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceDelete")
    public Boolean forceDelete;
    public DeleteCertificateQueryParams withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
}