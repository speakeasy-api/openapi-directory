package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetProtectionStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public GetProtectionStatusRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetProtectionStatusRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccountId")
    public String memberAccountId;
    public GetProtectionStatusRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetProtectionStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("PolicyId")
    public String policyId;
    public GetProtectionStatusRequest withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public GetProtectionStatusRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}