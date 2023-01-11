package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionTypeSettings
 * Returns information about the settings for an action type.
**/
public class ActionTypeSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityUrlTemplate")
    public String entityUrlTemplate;
    public ActionTypeSettings withEntityUrlTemplate(String entityUrlTemplate) {
        this.entityUrlTemplate = entityUrlTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionUrlTemplate")
    public String executionUrlTemplate;
    public ActionTypeSettings withExecutionUrlTemplate(String executionUrlTemplate) {
        this.executionUrlTemplate = executionUrlTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionUrlTemplate")
    public String revisionUrlTemplate;
    public ActionTypeSettings withRevisionUrlTemplate(String revisionUrlTemplate) {
        this.revisionUrlTemplate = revisionUrlTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyConfigurationUrl")
    public String thirdPartyConfigurationUrl;
    public ActionTypeSettings withThirdPartyConfigurationUrl(String thirdPartyConfigurationUrl) {
        this.thirdPartyConfigurationUrl = thirdPartyConfigurationUrl;
        return this;
    }
}