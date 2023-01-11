package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountUpdateAccountRequestBodyAccountQuotaValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noticeEnabled")
    public Boolean noticeEnabled;
    public UpdateAccountUpdateAccountRequestBodyAccountQuotaValues withNoticeEnabled(Boolean noticeEnabled) {
        this.noticeEnabled = noticeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noticeThreshold")
    public Long noticeThreshold;
    public UpdateAccountUpdateAccountRequestBodyAccountQuotaValues withNoticeThreshold(Long noticeThreshold) {
        this.noticeThreshold = noticeThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionsNoticeEnabled")
    public Boolean transactionsNoticeEnabled;
    public UpdateAccountUpdateAccountRequestBodyAccountQuotaValues withTransactionsNoticeEnabled(Boolean transactionsNoticeEnabled) {
        this.transactionsNoticeEnabled = transactionsNoticeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionsNoticeThreshold")
    public Long transactionsNoticeThreshold;
    public UpdateAccountUpdateAccountRequestBodyAccountQuotaValues withTransactionsNoticeThreshold(Long transactionsNoticeThreshold) {
        this.transactionsNoticeThreshold = transactionsNoticeThreshold;
        return this;
    }
}