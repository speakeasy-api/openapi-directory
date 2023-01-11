package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIndexDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetIndexDocumentsActionEnum action;
    public GetIndexDocumentsQueryParams withAction(GetIndexDocumentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetIndexDocumentsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetIndexDocumentsVersionEnum version;
    public GetIndexDocumentsQueryParams withVersion(GetIndexDocumentsVersionEnum version) {
        this.version = version;
        return this;
    }
}