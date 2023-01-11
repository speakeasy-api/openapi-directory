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
 * AccountModification
 * Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. 
**/
public class AccountModification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancyManagementCidrRange")
    public String dedicatedTenancyManagementCidrRange;
    public AccountModification withDedicatedTenancyManagementCidrRange(String dedicatedTenancyManagementCidrRange) {
        this.dedicatedTenancyManagementCidrRange = dedicatedTenancyManagementCidrRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancySupport")
    public DedicatedTenancySupportResultEnumEnum dedicatedTenancySupport;
    public AccountModification withDedicatedTenancySupport(DedicatedTenancySupportResultEnumEnum dedicatedTenancySupport) {
        this.dedicatedTenancySupport = dedicatedTenancySupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public AccountModification withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public AccountModification withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModificationState")
    public DedicatedTenancyModificationStateEnumEnum modificationState;
    public AccountModification withModificationState(DedicatedTenancyModificationStateEnumEnum modificationState) {
        this.modificationState = modificationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public AccountModification withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}