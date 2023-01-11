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
 * SecurityConfiguration
 * Specifies a security configuration.
**/
public class SecurityConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimeStamp")
    public OffsetDateTime createdTimeStamp;
    public SecurityConfiguration withCreatedTimeStamp(OffsetDateTime createdTimeStamp) {
        this.createdTimeStamp = createdTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public SecurityConfiguration withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SecurityConfiguration withName(String name) {
        this.name = name;
        return this;
    }
}