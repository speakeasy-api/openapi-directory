package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetServerCertificateActionEnum action;
    public GetGetServerCertificateQueryParams withAction(GetGetServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServerCertificateName")
    public String serverCertificateName;
    public GetGetServerCertificateQueryParams withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetServerCertificateVersionEnum version;
    public GetGetServerCertificateQueryParams withVersion(GetGetServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}