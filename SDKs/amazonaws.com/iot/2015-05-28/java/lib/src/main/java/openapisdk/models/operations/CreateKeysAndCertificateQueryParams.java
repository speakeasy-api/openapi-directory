package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateKeysAndCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsActive")
    public Boolean setAsActive;
    public CreateKeysAndCertificateQueryParams withSetAsActive(Boolean setAsActive) {
        this.setAsActive = setAsActive;
        return this;
    }
}