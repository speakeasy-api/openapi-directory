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
 * Trust
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
**/
public class Trust {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDateTime")
    public OffsetDateTime createdDateTime;
    public Trust withCreatedDateTime(OffsetDateTime createdDateTime) {
        this.createdDateTime = createdDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public Trust withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public Trust withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteDomainName")
    public String remoteDomainName;
    public Trust withRemoteDomainName(String remoteDomainName) {
        this.remoteDomainName = remoteDomainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectiveAuth")
    public SelectiveAuthEnum selectiveAuth;
    public Trust withSelectiveAuth(SelectiveAuthEnum selectiveAuth) {
        this.selectiveAuth = selectiveAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StateLastUpdatedDateTime")
    public OffsetDateTime stateLastUpdatedDateTime;
    public Trust withStateLastUpdatedDateTime(OffsetDateTime stateLastUpdatedDateTime) {
        this.stateLastUpdatedDateTime = stateLastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustDirection")
    public TrustDirectionEnum trustDirection;
    public Trust withTrustDirection(TrustDirectionEnum trustDirection) {
        this.trustDirection = trustDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustId")
    public String trustId;
    public Trust withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustState")
    public TrustStateEnum trustState;
    public Trust withTrustState(TrustStateEnum trustState) {
        this.trustState = trustState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustStateReason")
    public String trustStateReason;
    public Trust withTrustStateReason(String trustStateReason) {
        this.trustStateReason = trustStateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustType")
    public TrustTypeEnum trustType;
    public Trust withTrustType(TrustTypeEnum trustType) {
        this.trustType = trustType;
        return this;
    }
}