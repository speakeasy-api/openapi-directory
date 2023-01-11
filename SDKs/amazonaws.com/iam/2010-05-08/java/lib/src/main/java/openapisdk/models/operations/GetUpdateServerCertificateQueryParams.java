package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateServerCertificateActionEnum action;
    public GetUpdateServerCertificateQueryParams withAction(GetUpdateServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewPath")
    public String newPath;
    public GetUpdateServerCertificateQueryParams withNewPath(String newPath) {
        this.newPath = newPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewServerCertificateName")
    public String newServerCertificateName;
    public GetUpdateServerCertificateQueryParams withNewServerCertificateName(String newServerCertificateName) {
        this.newServerCertificateName = newServerCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServerCertificateName")
    public String serverCertificateName;
    public GetUpdateServerCertificateQueryParams withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateServerCertificateVersionEnum version;
    public GetUpdateServerCertificateQueryParams withVersion(GetUpdateServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}