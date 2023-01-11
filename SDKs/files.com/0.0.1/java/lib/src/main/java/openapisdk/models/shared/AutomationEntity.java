package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutomationEntity
 * List Automations
**/
public class AutomationEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automation")
    public AutomationEntityAutomationEnum automation;
    public AutomationEntity withAutomation(AutomationEntityAutomationEnum automation) {
        this.automation = automation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_replace_from")
    public String destinationReplaceFrom;
    public AutomationEntity withDestinationReplaceFrom(String destinationReplaceFrom) {
        this.destinationReplaceFrom = destinationReplaceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_replace_to")
    public String destinationReplaceTo;
    public AutomationEntity withDestinationReplaceTo(String destinationReplaceTo) {
        this.destinationReplaceTo = destinationReplaceTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public String destinations;
    public AutomationEntity withDestinations(String destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_ids")
    public Integer[] groupIds;
    public AutomationEntity withGroupIds(Integer[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AutomationEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public String interval;
    public AutomationEntity withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_process_on")
    public String nextProcessOn;
    public AutomationEntity withNextProcessOn(String nextProcessOn) {
        this.nextProcessOn = nextProcessOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public AutomationEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public java.util.Map<String, Object> schedule;
    public AutomationEntity withSchedule(java.util.Map<String, Object> schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public AutomationEntity withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public AutomationEntityTriggerEnum trigger;
    public AutomationEntity withTrigger(AutomationEntityTriggerEnum trigger) {
        this.trigger = trigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_action_path")
    public String triggerActionPath;
    public AutomationEntity withTriggerActionPath(String triggerActionPath) {
        this.triggerActionPath = triggerActionPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_actions")
    public String triggerActions;
    public AutomationEntity withTriggerActions(String triggerActions) {
        this.triggerActions = triggerActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public AutomationEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_ids")
    public Integer[] userIds;
    public AutomationEntity withUserIds(Integer[] userIds) {
        this.userIds = userIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public AutomationEntity withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public AutomationEntity withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}