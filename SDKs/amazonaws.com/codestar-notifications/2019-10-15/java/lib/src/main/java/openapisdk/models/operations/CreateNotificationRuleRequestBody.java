package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNotificationRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateNotificationRuleRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("DetailType")
    public CreateNotificationRuleRequestBodyDetailTypeEnum detailType;
    public CreateNotificationRuleRequestBody withDetailType(CreateNotificationRuleRequestBodyDetailTypeEnum detailType) {
        this.detailType = detailType;
        return this;
    }
    @JsonProperty("EventTypeIds")
    public String[] eventTypeIds;
    public CreateNotificationRuleRequestBody withEventTypeIds(String[] eventTypeIds) {
        this.eventTypeIds = eventTypeIds;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateNotificationRuleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Resource")
    public String resource;
    public CreateNotificationRuleRequestBody withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public CreateNotificationRuleRequestBodyStatusEnum status;
    public CreateNotificationRuleRequestBody withStatus(CreateNotificationRuleRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateNotificationRuleRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Targets")
    public openapisdk.models.shared.Target[] targets;
    public CreateNotificationRuleRequestBody withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}