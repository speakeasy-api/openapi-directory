package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagServerCertificateActionEnum action;
    public GetUntagServerCertificateQueryParams withAction(GetUntagServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServerCertificateName")
    public String serverCertificateName;
    public GetUntagServerCertificateQueryParams withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagServerCertificateQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagServerCertificateVersionEnum version;
    public GetUntagServerCertificateQueryParams withVersion(GetUntagServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}