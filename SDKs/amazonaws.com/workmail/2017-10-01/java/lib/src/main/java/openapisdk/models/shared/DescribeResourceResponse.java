package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BookingOptions")
    public BookingOptions bookingOptions;
    public DescribeResourceResponse withBookingOptions(BookingOptions bookingOptions) {
        this.bookingOptions = bookingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DisabledDate")
    public OffsetDateTime disabledDate;
    public DescribeResourceResponse withDisabledDate(OffsetDateTime disabledDate) {
        this.disabledDate = disabledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public DescribeResourceResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EnabledDate")
    public OffsetDateTime enabledDate;
    public DescribeResourceResponse withEnabledDate(OffsetDateTime enabledDate) {
        this.enabledDate = enabledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeResourceResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public DescribeResourceResponse withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public EntityStateEnum state;
    public DescribeResourceResponse withState(EntityStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ResourceTypeEnum type;
    public DescribeResourceResponse withType(ResourceTypeEnum type) {
        this.type = type;
        return this;
    }
}