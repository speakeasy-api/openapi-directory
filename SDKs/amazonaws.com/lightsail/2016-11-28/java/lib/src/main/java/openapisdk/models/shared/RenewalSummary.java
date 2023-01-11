package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RenewalSummary
 * Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
**/
public class RenewalSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainValidationRecords")
    public DomainValidationRecord[] domainValidationRecords;
    public RenewalSummary withDomainValidationRecords(DomainValidationRecord[] domainValidationRecords) {
        this.domainValidationRecords = domainValidationRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalStatus")
    public RenewalStatusEnum renewalStatus;
    public RenewalSummary withRenewalStatus(RenewalStatusEnum renewalStatus) {
        this.renewalStatus = renewalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalStatusReason")
    public String renewalStatusReason;
    public RenewalSummary withRenewalStatusReason(String renewalStatusReason) {
        this.renewalStatusReason = renewalStatusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public RenewalSummary withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}