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
 * DomainSummary
 * The summary of the domain.
**/
public class DomainSummary {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public DomainSummary withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public DomainSummary withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public DomainSummary withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("DomainStatus")
    public DomainStatusEnum domainStatus;
    public DomainSummary withDomainStatus(DomainStatusEnum domainStatus) {
        this.domainStatus = domainStatus;
        return this;
    }
}