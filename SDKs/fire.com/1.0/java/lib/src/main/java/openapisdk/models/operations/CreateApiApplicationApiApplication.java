package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateApiApplicationApiApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public Long applicationId;
    public CreateApiApplicationApiApplication withApplicationId(Long applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public CreateApiApplicationApiApplication withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public CreateApiApplicationApiApplication withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateApiApplicationApiApplication withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public CreateApiApplicationApiApplication withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public CreateApiApplicationApiApplication withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPayeeApprovalsRequired")
    public Long numberOfPayeeApprovalsRequired;
    public CreateApiApplicationApiApplication withNumberOfPayeeApprovalsRequired(Long numberOfPayeeApprovalsRequired) {
        this.numberOfPayeeApprovalsRequired = numberOfPayeeApprovalsRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPaymentApprovalsRequired")
    public Long numberOfPaymentApprovalsRequired;
    public CreateApiApplicationApiApplication withNumberOfPaymentApprovalsRequired(Long numberOfPaymentApprovalsRequired) {
        this.numberOfPaymentApprovalsRequired = numberOfPaymentApprovalsRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public CreateApiApplicationApiApplication withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}