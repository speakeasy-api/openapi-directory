package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAssociatedEnclaveCertificateIamRolesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAssociatedEnclaveCertificateIamRolesActionEnum action;
    public PostGetAssociatedEnclaveCertificateIamRolesQueryParams withAction(PostGetAssociatedEnclaveCertificateIamRolesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAssociatedEnclaveCertificateIamRolesVersionEnum version;
    public PostGetAssociatedEnclaveCertificateIamRolesQueryParams withVersion(PostGetAssociatedEnclaveCertificateIamRolesVersionEnum version) {
        this.version = version;
        return this;
    }
}