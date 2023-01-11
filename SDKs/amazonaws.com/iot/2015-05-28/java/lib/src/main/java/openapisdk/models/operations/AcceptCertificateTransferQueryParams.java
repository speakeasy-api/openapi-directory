package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptCertificateTransferQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsActive")
    public Boolean setAsActive;
    public AcceptCertificateTransferQueryParams withSetAsActive(Boolean setAsActive) {
        this.setAsActive = setAsActive;
        return this;
    }
}