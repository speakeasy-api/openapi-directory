package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribePartnersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountId")
    public String accountId;
    public GetDescribePartnersQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribePartnersActionEnum action;
    public GetDescribePartnersQueryParams withAction(GetDescribePartnersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribePartnersQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DatabaseName")
    public String databaseName;
    public GetDescribePartnersQueryParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PartnerName")
    public String partnerName;
    public GetDescribePartnersQueryParams withPartnerName(String partnerName) {
        this.partnerName = partnerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribePartnersVersionEnum version;
    public GetDescribePartnersQueryParams withVersion(GetDescribePartnersVersionEnum version) {
        this.version = version;
        return this;
    }
}