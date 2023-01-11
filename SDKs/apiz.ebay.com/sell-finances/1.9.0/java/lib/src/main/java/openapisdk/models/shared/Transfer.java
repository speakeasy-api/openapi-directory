package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transfer
 * This type is the base response type used by TRANSFER transaction type that is returned in the response.
**/
public class Transfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingSource")
    public FundingSource fundingSource;
    public Transfer withFundingSource(FundingSource fundingSource) {
        this.fundingSource = fundingSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public String transactionDate;
    public Transfer withTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferAmount")
    public Amount transferAmount;
    public Transfer withTransferAmount(Amount transferAmount) {
        this.transferAmount = transferAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferDetail")
    public TransferDetail transferDetail;
    public Transfer withTransferDetail(TransferDetail transferDetail) {
        this.transferDetail = transferDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferId")
    public String transferId;
    public Transfer withTransferId(String transferId) {
        this.transferId = transferId;
        return this;
    }
}