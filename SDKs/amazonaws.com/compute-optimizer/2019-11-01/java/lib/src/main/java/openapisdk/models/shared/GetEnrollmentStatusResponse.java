package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetEnrollmentStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedTimestamp")
    public OffsetDateTime lastUpdatedTimestamp;
    public GetEnrollmentStatusResponse withLastUpdatedTimestamp(OffsetDateTime lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberAccountsEnrolled")
    public Boolean memberAccountsEnrolled;
    public GetEnrollmentStatusResponse withMemberAccountsEnrolled(Boolean memberAccountsEnrolled) {
        this.memberAccountsEnrolled = memberAccountsEnrolled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfMemberAccountsOptedIn")
    public Long numberOfMemberAccountsOptedIn;
    public GetEnrollmentStatusResponse withNumberOfMemberAccountsOptedIn(Long numberOfMemberAccountsOptedIn) {
        this.numberOfMemberAccountsOptedIn = numberOfMemberAccountsOptedIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public GetEnrollmentStatusResponse withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public GetEnrollmentStatusResponse withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}