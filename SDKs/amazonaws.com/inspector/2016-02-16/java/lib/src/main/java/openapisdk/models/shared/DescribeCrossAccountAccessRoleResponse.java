package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeCrossAccountAccessRoleResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("registeredAt")
    public OffsetDateTime registeredAt;
    public DescribeCrossAccountAccessRoleResponse withRegisteredAt(OffsetDateTime registeredAt) {
        this.registeredAt = registeredAt;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeCrossAccountAccessRoleResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public DescribeCrossAccountAccessRoleResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}