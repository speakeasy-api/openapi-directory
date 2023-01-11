package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteServerCertificateActionEnum action;
    public GetDeleteServerCertificateQueryParams withAction(GetDeleteServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServerCertificateName")
    public String serverCertificateName;
    public GetDeleteServerCertificateQueryParams withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteServerCertificateVersionEnum version;
    public GetDeleteServerCertificateQueryParams withVersion(GetDeleteServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}