package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAssociatedEnclaveCertificateIamRolesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAssociatedEnclaveCertificateIamRolesActionEnum action;
    public GetGetAssociatedEnclaveCertificateIamRolesQueryParams withAction(GetGetAssociatedEnclaveCertificateIamRolesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateArn")
    public String certificateArn;
    public GetGetAssociatedEnclaveCertificateIamRolesQueryParams withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetAssociatedEnclaveCertificateIamRolesQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAssociatedEnclaveCertificateIamRolesVersionEnum version;
    public GetGetAssociatedEnclaveCertificateIamRolesQueryParams withVersion(GetGetAssociatedEnclaveCertificateIamRolesVersionEnum version) {
        this.version = version;
        return this;
    }
}