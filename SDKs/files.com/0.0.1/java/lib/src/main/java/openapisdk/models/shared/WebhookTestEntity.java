package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookTestEntity
 * Create Webhook Test
**/
public class WebhookTestEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;
    public WebhookTestEntity withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AutoEntity data;
    public WebhookTestEntity withData(AutoEntity data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public WebhookTestEntity withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public WebhookTestEntity withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public WebhookTestEntity withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}