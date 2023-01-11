package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=automation")
    public PatchAutomationsIdRequestBodyAutomationEnum automation;
    public PatchAutomationsIdRequestBody withAutomation(PatchAutomationsIdRequestBodyAutomationEnum automation) {
        this.automation = automation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination")
    public String destination;
    public PatchAutomationsIdRequestBody withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination_replace_from")
    public String destinationReplaceFrom;
    public PatchAutomationsIdRequestBody withDestinationReplaceFrom(String destinationReplaceFrom) {
        this.destinationReplaceFrom = destinationReplaceFrom;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destination_replace_to")
    public String destinationReplaceTo;
    public PatchAutomationsIdRequestBody withDestinationReplaceTo(String destinationReplaceTo) {
        this.destinationReplaceTo = destinationReplaceTo;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=destinations,json")
    public String[] destinations;
    public PatchAutomationsIdRequestBody withDestinations(String[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_ids")
    public String groupIds;
    public PatchAutomationsIdRequestBody withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=interval")
    public String interval;
    public PatchAutomationsIdRequestBody withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PatchAutomationsIdRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule,json")
    public java.util.Map<String, Object> schedule;
    public PatchAutomationsIdRequestBody withSchedule(java.util.Map<String, Object> schedule) {
        this.schedule = schedule;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source")
    public String source;
    public PatchAutomationsIdRequestBody withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger")
    public PatchAutomationsIdRequestBodyTriggerEnum trigger;
    public PatchAutomationsIdRequestBody withTrigger(PatchAutomationsIdRequestBodyTriggerEnum trigger) {
        this.trigger = trigger;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger_action_path")
    public String triggerActionPath;
    public PatchAutomationsIdRequestBody withTriggerActionPath(String triggerActionPath) {
        this.triggerActionPath = triggerActionPath;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trigger_actions,json")
    public String[] triggerActions;
    public PatchAutomationsIdRequestBody withTriggerActions(String[] triggerActions) {
        this.triggerActions = triggerActions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_ids")
    public String userIds;
    public PatchAutomationsIdRequestBody withUserIds(String userIds) {
        this.userIds = userIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=value,json")
    public java.util.Map<String, Object> value;
    public PatchAutomationsIdRequestBody withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}