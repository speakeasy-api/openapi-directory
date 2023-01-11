package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleTemplateResponse
 * The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
public class ScheduleTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public ScheduleTemplateResponse withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public ScheduleTemplateResponse withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScheduleTemplateResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTemplateId")
    public String scheduleTemplateId;
    public ScheduleTemplateResponse withScheduleTemplateId(String scheduleTemplateId) {
        this.scheduleTemplateId = scheduleTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ScheduleTemplateResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedConfigurations")
    public SupportedConfiguration[] supportedConfigurations;
    public ScheduleTemplateResponse withSupportedConfigurations(SupportedConfiguration[] supportedConfigurations) {
        this.supportedConfigurations = supportedConfigurations;
        return this;
    }
}