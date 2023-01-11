package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateEnclaveCertificateIamRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateEnclaveCertificateIamRoleActionEnum action;
    public PostAssociateEnclaveCertificateIamRoleQueryParams withAction(PostAssociateEnclaveCertificateIamRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateEnclaveCertificateIamRoleVersionEnum version;
    public PostAssociateEnclaveCertificateIamRoleQueryParams withVersion(PostAssociateEnclaveCertificateIamRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}