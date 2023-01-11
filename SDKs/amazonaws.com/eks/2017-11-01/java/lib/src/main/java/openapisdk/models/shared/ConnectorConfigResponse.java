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
 * ConnectorConfigResponse
 * The full description of your connected cluster.
**/
public class ConnectorConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationCode")
    public String activationCode;
    public ConnectorConfigResponse withActivationCode(String activationCode) {
        this.activationCode = activationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("activationExpiry")
    public OffsetDateTime activationExpiry;
    public ConnectorConfigResponse withActivationExpiry(OffsetDateTime activationExpiry) {
        this.activationExpiry = activationExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationId")
    public String activationId;
    public ConnectorConfigResponse withActivationId(String activationId) {
        this.activationId = activationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public ConnectorConfigResponse withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public ConnectorConfigResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}