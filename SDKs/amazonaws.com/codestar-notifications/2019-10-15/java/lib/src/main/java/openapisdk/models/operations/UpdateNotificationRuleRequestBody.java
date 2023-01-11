package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNotificationRuleRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public UpdateNotificationRuleRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailType")
    public UpdateNotificationRuleRequestBodyDetailTypeEnum detailType;
    public UpdateNotificationRuleRequestBody withDetailType(UpdateNotificationRuleRequestBodyDetailTypeEnum detailType) {
        this.detailType = detailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTypeIds")
    public String[] eventTypeIds;
    public UpdateNotificationRuleRequestBody withEventTypeIds(String[] eventTypeIds) {
        this.eventTypeIds = eventTypeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateNotificationRuleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UpdateNotificationRuleRequestBodyStatusEnum status;
    public UpdateNotificationRuleRequestBody withStatus(UpdateNotificationRuleRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Targets")
    public openapisdk.models.shared.Target[] targets;
    public UpdateNotificationRuleRequestBody withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}