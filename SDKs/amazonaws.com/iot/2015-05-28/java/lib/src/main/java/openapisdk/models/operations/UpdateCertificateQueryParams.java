package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newStatus")
    public UpdateCertificateNewStatusEnum newStatus;
    public UpdateCertificateQueryParams withNewStatus(UpdateCertificateNewStatusEnum newStatus) {
        this.newStatus = newStatus;
        return this;
    }
}