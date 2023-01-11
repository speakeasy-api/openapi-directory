package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Quota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimit")
    public Long bandwidthLimit;
    public Quota withBandwidthLimit(Long bandwidthLimit) {
        this.bandwidthLimit = bandwidthLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthUsed")
    public Long bandwidthUsed;
    public Quota withBandwidthUsed(Long bandwidthUsed) {
        this.bandwidthUsed = bandwidthUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskLimit")
    public Long diskLimit;
    public Quota withDiskLimit(Long diskLimit) {
        this.diskLimit = diskLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskUsed")
    public Long diskUsed;
    public Quota withDiskUsed(Long diskUsed) {
        this.diskUsed = diskUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noticeEnabled")
    public Boolean noticeEnabled;
    public Quota withNoticeEnabled(Boolean noticeEnabled) {
        this.noticeEnabled = noticeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noticeThreshold")
    public Integer noticeThreshold;
    public Quota withNoticeThreshold(Integer noticeThreshold) {
        this.noticeThreshold = noticeThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionsLimit")
    public Integer transactionsLimit;
    public Quota withTransactionsLimit(Integer transactionsLimit) {
        this.transactionsLimit = transactionsLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionsNoticeEnabled")
    public Boolean transactionsNoticeEnabled;
    public Quota withTransactionsNoticeEnabled(Boolean transactionsNoticeEnabled) {
        this.transactionsNoticeEnabled = transactionsNoticeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionsNoticeThreshold")
    public Integer transactionsNoticeThreshold;
    public Quota withTransactionsNoticeThreshold(Integer transactionsNoticeThreshold) {
        this.transactionsNoticeThreshold = transactionsNoticeThreshold;
        return this;
    }
}