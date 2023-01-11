package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyCertificatesActionEnum action;
    public GetModifyCertificatesQueryParams withAction(GetModifyCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateIdentifier")
    public String certificateIdentifier;
    public GetModifyCertificatesQueryParams withCertificateIdentifier(String certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RemoveCustomerOverride")
    public Boolean removeCustomerOverride;
    public GetModifyCertificatesQueryParams withRemoveCustomerOverride(Boolean removeCustomerOverride) {
        this.removeCustomerOverride = removeCustomerOverride;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyCertificatesVersionEnum version;
    public GetModifyCertificatesQueryParams withVersion(GetModifyCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}