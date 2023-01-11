package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddPartnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountId")
    public String accountId;
    public GetAddPartnerQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddPartnerActionEnum action;
    public GetAddPartnerQueryParams withAction(GetAddPartnerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetAddPartnerQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DatabaseName")
    public String databaseName;
    public GetAddPartnerQueryParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PartnerName")
    public String partnerName;
    public GetAddPartnerQueryParams withPartnerName(String partnerName) {
        this.partnerName = partnerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddPartnerVersionEnum version;
    public GetAddPartnerQueryParams withVersion(GetAddPartnerVersionEnum version) {
        this.version = version;
        return this;
    }
}