package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetListofApproversForBatchBatchApproversApprovals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public GetListofApproversForBatchBatchApproversApprovals withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public GetListofApproversForBatchBatchApproversApprovals withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public GetListofApproversForBatchBatchApproversApprovals withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetListofApproversForBatchBatchApproversApprovals withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileNumber")
    public String mobileNumber;
    public GetListofApproversForBatchBatchApproversApprovals withMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetListofApproversForBatchBatchApproversApprovals withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Long userId;
    public GetListofApproversForBatchBatchApproversApprovals withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}