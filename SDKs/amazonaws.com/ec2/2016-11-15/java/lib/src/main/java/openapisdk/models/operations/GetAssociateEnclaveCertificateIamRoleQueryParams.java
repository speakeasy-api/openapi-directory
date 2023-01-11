package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateEnclaveCertificateIamRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateEnclaveCertificateIamRoleActionEnum action;
    public GetAssociateEnclaveCertificateIamRoleQueryParams withAction(GetAssociateEnclaveCertificateIamRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateArn")
    public String certificateArn;
    public GetAssociateEnclaveCertificateIamRoleQueryParams withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateEnclaveCertificateIamRoleQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetAssociateEnclaveCertificateIamRoleQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateEnclaveCertificateIamRoleVersionEnum version;
    public GetAssociateEnclaveCertificateIamRoleQueryParams withVersion(GetAssociateEnclaveCertificateIamRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}