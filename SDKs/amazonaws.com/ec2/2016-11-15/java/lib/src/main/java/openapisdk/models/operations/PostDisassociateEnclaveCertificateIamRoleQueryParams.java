package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateEnclaveCertificateIamRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateEnclaveCertificateIamRoleActionEnum action;
    public PostDisassociateEnclaveCertificateIamRoleQueryParams withAction(PostDisassociateEnclaveCertificateIamRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateEnclaveCertificateIamRoleVersionEnum version;
    public PostDisassociateEnclaveCertificateIamRoleQueryParams withVersion(PostDisassociateEnclaveCertificateIamRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}