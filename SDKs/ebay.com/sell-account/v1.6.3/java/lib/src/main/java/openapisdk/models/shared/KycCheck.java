package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KycCheck
 * This type is used to provide details about any KYC check that is applicable to the managed payments seller.
**/
public class KycCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert")
    public String alert;
    public KycCheck withAlert(String alert) {
        this.alert = alert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRequired")
    public String dataRequired;
    public KycCheck withDataRequired(String dataRequired) {
        this.dataRequired = dataRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailMessage")
    public String detailMessage;
    public KycCheck withDetailMessage(String detailMessage) {
        this.detailMessage = detailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public KycCheck withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remedyUrl")
    public String remedyUrl;
    public KycCheck withRemedyUrl(String remedyUrl) {
        this.remedyUrl = remedyUrl;
        return this;
    }
}