package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertificateFromCsrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsActive")
    public Boolean setAsActive;
    public CreateCertificateFromCsrQueryParams withSetAsActive(Boolean setAsActive) {
        this.setAsActive = setAsActive;
        return this;
    }
}