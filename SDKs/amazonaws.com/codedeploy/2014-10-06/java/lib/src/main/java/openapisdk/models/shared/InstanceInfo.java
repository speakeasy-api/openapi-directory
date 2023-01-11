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
 * InstanceInfo
 * Information about an on-premises instance.
**/
public class InstanceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deregisterTime")
    public OffsetDateTime deregisterTime;
    public InstanceInfo withDeregisterTime(OffsetDateTime deregisterTime) {
        this.deregisterTime = deregisterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamSessionArn")
    public String iamSessionArn;
    public InstanceInfo withIamSessionArn(String iamSessionArn) {
        this.iamSessionArn = iamSessionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamUserArn")
    public String iamUserArn;
    public InstanceInfo withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceArn")
    public String instanceArn;
    public InstanceInfo withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public InstanceInfo withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("registerTime")
    public OffsetDateTime registerTime;
    public InstanceInfo withRegisterTime(OffsetDateTime registerTime) {
        this.registerTime = registerTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public InstanceInfo withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}