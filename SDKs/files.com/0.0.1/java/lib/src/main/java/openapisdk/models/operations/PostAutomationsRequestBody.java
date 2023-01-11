package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=automation")
    public PostAutomationsRequestBodyAutomationEnum automation;
    public PostAutomationsRequestBody withAutomation(PostAutomationsRequestBodyAutomationEnum automation) {
        this.automation = automation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination")
    public String destination;
    public PostAutomationsRequestBody withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination_replace_from")
    public String destinationReplaceFrom;
    public PostAutomationsRequestBody withDestinationReplaceFrom(String destinationReplaceFrom) {
        this.destinationReplaceFrom = destinationReplaceFrom;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination_replace_to")
    public String destinationReplaceTo;
    public PostAutomationsRequestBody withDestinationReplaceTo(String destinationReplaceTo) {
        this.destinationReplaceTo = destinationReplaceTo;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destinations,json")
    public String[] destinations;
    public PostAutomationsRequestBody withDestinations(String[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_ids")
    public String groupIds;
    public PostAutomationsRequestBody withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=interval")
    public String interval;
    public PostAutomationsRequestBody withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostAutomationsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule,json")
    public java.util.Map<String, Object> schedule;
    public PostAutomationsRequestBody withSchedule(java.util.Map<String, Object> schedule) {
        this.schedule = schedule;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source")
    public String source;
    public PostAutomationsRequestBody withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger")
    public PostAutomationsRequestBodyTriggerEnum trigger;
    public PostAutomationsRequestBody withTrigger(PostAutomationsRequestBodyTriggerEnum trigger) {
        this.trigger = trigger;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger_action_path")
    public String triggerActionPath;
    public PostAutomationsRequestBody withTriggerActionPath(String triggerActionPath) {
        this.triggerActionPath = triggerActionPath;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger_actions,json")
    public String[] triggerActions;
    public PostAutomationsRequestBody withTriggerActions(String[] triggerActions) {
        this.triggerActions = triggerActions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_ids")
    public String userIds;
    public PostAutomationsRequestBody withUserIds(String userIds) {
        this.userIds = userIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=value,json")
    public java.util.Map<String, Object> value;
    public PostAutomationsRequestBody withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}