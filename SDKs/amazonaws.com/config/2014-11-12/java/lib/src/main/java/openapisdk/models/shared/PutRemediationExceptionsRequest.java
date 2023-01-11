package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PutRemediationExceptionsRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public PutRemediationExceptionsRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationTime")
    public OffsetDateTime expirationTime;
    public PutRemediationExceptionsRequest withExpirationTime(OffsetDateTime expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public PutRemediationExceptionsRequest withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("ResourceKeys")
    public RemediationExceptionResourceKey[] resourceKeys;
    public PutRemediationExceptionsRequest withResourceKeys(RemediationExceptionResourceKey[] resourceKeys) {
        this.resourceKeys = resourceKeys;
        return this;
    }
}