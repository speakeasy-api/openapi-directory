package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCaCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newAutoRegistrationStatus")
    public UpdateCaCertificateNewAutoRegistrationStatusEnum newAutoRegistrationStatus;
    public UpdateCaCertificateQueryParams withNewAutoRegistrationStatus(UpdateCaCertificateNewAutoRegistrationStatusEnum newAutoRegistrationStatus) {
        this.newAutoRegistrationStatus = newAutoRegistrationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newStatus")
    public UpdateCaCertificateNewStatusEnum newStatus;
    public UpdateCaCertificateQueryParams withNewStatus(UpdateCaCertificateNewStatusEnum newStatus) {
        this.newStatus = newStatus;
        return this;
    }
}