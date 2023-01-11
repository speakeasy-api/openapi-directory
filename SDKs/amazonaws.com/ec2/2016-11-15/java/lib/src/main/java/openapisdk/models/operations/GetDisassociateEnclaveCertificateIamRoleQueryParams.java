package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateEnclaveCertificateIamRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateEnclaveCertificateIamRoleActionEnum action;
    public GetDisassociateEnclaveCertificateIamRoleQueryParams withAction(GetDisassociateEnclaveCertificateIamRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateArn")
    public String certificateArn;
    public GetDisassociateEnclaveCertificateIamRoleQueryParams withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisassociateEnclaveCertificateIamRoleQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetDisassociateEnclaveCertificateIamRoleQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateEnclaveCertificateIamRoleVersionEnum version;
    public GetDisassociateEnclaveCertificateIamRoleQueryParams withVersion(GetDisassociateEnclaveCertificateIamRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}