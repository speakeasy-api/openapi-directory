package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeEventSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public DescribeEventSourceResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public String createdBy;
    public DescribeEventSourceResponse withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeEventSourceResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationTime")
    public OffsetDateTime expirationTime;
    public DescribeEventSourceResponse withExpirationTime(OffsetDateTime expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeEventSourceResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public EventSourceStateEnum state;
    public DescribeEventSourceResponse withState(EventSourceStateEnum state) {
        this.state = state;
        return this;
    }
}