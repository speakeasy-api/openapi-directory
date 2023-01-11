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
 * GluePolicy
 * A structure for returning a resource policy.
**/
public class GluePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public GluePolicy withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyHash")
    public String policyHash;
    public GluePolicy withPolicyHash(String policyHash) {
        this.policyHash = policyHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyInJson")
    public String policyInJson;
    public GluePolicy withPolicyInJson(String policyInJson) {
        this.policyInJson = policyInJson;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public GluePolicy withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}