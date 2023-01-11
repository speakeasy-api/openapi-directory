package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusEntity
 * Test webhook.
**/
public class StatusEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_body")
    public String clickwrapBody;
    public StatusEntity withClickwrapBody(String clickwrapBody) {
        this.clickwrapBody = clickwrapBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_id")
    public Integer clickwrapId;
    public StatusEntity withClickwrapId(Integer clickwrapId) {
        this.clickwrapId = clickwrapId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;
    public StatusEntity withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AutoEntity data;
    public StatusEntity withData(AutoEntity data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ErrorsEntity errors;
    public StatusEntity withErrors(ErrorsEntity errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StatusEntity withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public StatusEntity withStatus(String status) {
        this.status = status;
        return this;
    }
}