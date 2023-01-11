package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DisabledDate")
    public OffsetDateTime disabledDate;
    public DescribeGroupResponse withDisabledDate(OffsetDateTime disabledDate) {
        this.disabledDate = disabledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public DescribeGroupResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EnabledDate")
    public OffsetDateTime enabledDate;
    public DescribeGroupResponse withEnabledDate(OffsetDateTime enabledDate) {
        this.enabledDate = enabledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupId")
    public String groupId;
    public DescribeGroupResponse withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeGroupResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public EntityStateEnum state;
    public DescribeGroupResponse withState(EntityStateEnum state) {
        this.state = state;
        return this;
    }
}