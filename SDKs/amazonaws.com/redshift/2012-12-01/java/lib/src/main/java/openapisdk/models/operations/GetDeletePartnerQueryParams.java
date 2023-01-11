package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletePartnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountId")
    public String accountId;
    public GetDeletePartnerQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeletePartnerActionEnum action;
    public GetDeletePartnerQueryParams withAction(GetDeletePartnerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDeletePartnerQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DatabaseName")
    public String databaseName;
    public GetDeletePartnerQueryParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PartnerName")
    public String partnerName;
    public GetDeletePartnerQueryParams withPartnerName(String partnerName) {
        this.partnerName = partnerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeletePartnerVersionEnum version;
    public GetDeletePartnerQueryParams withVersion(GetDeletePartnerVersionEnum version) {
        this.version = version;
        return this;
    }
}