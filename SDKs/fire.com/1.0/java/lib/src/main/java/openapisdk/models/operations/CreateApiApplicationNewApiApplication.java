package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateApiApplicationNewApiApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public CreateApiApplicationNewApiApplication withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateApiApplicationNewApiApplication withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public CreateApiApplicationNewApiApplication withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public CreateApiApplicationNewApiApplication withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPayeeApprovalsRequired")
    public Long numberOfPayeeApprovalsRequired;
    public CreateApiApplicationNewApiApplication withNumberOfPayeeApprovalsRequired(Long numberOfPayeeApprovalsRequired) {
        this.numberOfPayeeApprovalsRequired = numberOfPayeeApprovalsRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPaymentApprovalsRequired")
    public Long numberOfPaymentApprovalsRequired;
    public CreateApiApplicationNewApiApplication withNumberOfPaymentApprovalsRequired(Long numberOfPaymentApprovalsRequired) {
        this.numberOfPaymentApprovalsRequired = numberOfPaymentApprovalsRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public CreateApiApplicationNewApiApplication withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}