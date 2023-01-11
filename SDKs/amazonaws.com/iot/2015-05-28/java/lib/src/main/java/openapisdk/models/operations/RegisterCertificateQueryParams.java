package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsActive")
    public Boolean setAsActive;
    public RegisterCertificateQueryParams withSetAsActive(Boolean setAsActive) {
        this.setAsActive = setAsActive;
        return this;
    }
}