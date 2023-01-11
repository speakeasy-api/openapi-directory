package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCaCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowAutoRegistration")
    public Boolean allowAutoRegistration;
    public RegisterCaCertificateQueryParams withAllowAutoRegistration(Boolean allowAutoRegistration) {
        this.allowAutoRegistration = allowAutoRegistration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsActive")
    public Boolean setAsActive;
    public RegisterCaCertificateQueryParams withSetAsActive(Boolean setAsActive) {
        this.setAsActive = setAsActive;
        return this;
    }
}