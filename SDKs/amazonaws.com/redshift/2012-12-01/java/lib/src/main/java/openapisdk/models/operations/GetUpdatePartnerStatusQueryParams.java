package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdatePartnerStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountId")
    public String accountId;
    public GetUpdatePartnerStatusQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdatePartnerStatusActionEnum action;
    public GetUpdatePartnerStatusQueryParams withAction(GetUpdatePartnerStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetUpdatePartnerStatusQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DatabaseName")
    public String databaseName;
    public GetUpdatePartnerStatusQueryParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PartnerName")
    public String partnerName;
    public GetUpdatePartnerStatusQueryParams withPartnerName(String partnerName) {
        this.partnerName = partnerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetUpdatePartnerStatusStatusEnum status;
    public GetUpdatePartnerStatusQueryParams withStatus(GetUpdatePartnerStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StatusMessage")
    public String statusMessage;
    public GetUpdatePartnerStatusQueryParams withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdatePartnerStatusVersionEnum version;
    public GetUpdatePartnerStatusQueryParams withVersion(GetUpdatePartnerStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}