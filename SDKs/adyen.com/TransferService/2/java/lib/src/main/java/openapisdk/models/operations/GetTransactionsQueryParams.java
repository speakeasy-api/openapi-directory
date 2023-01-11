package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountHolderId")
    public String accountHolderId;
    public GetTransactionsQueryParams withAccountHolderId(String accountHolderId) {
        this.accountHolderId = accountHolderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=balanceAccountId")
    public String balanceAccountId;
    public GetTransactionsQueryParams withBalanceAccountId(String balanceAccountId) {
        this.balanceAccountId = balanceAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=balancePlatform")
    public String balancePlatform;
    public GetTransactionsQueryParams withBalancePlatform(String balancePlatform) {
        this.balancePlatform = balancePlatform;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdSince")
    public OffsetDateTime createdSince;
    public GetTransactionsQueryParams withCreatedSince(OffsetDateTime createdSince) {
        this.createdSince = createdSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdUntil")
    public OffsetDateTime createdUntil;
    public GetTransactionsQueryParams withCreatedUntil(OffsetDateTime createdUntil) {
        this.createdUntil = createdUntil;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetTransactionsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetTransactionsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}