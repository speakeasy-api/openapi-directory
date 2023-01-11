package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ConfigurationEvent
 *  The event information. 
**/
public class ConfigurationEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventDetail")
    public String eventDetail;
    public ConfigurationEvent withEventDetail(String eventDetail) {
        this.eventDetail = eventDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventResourceName")
    public String eventResourceName;
    public ConfigurationEvent withEventResourceName(String eventResourceName) {
        this.eventResourceName = eventResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventResourceType")
    public ConfigurationEventResourceTypeEnum eventResourceType;
    public ConfigurationEvent withEventResourceType(ConfigurationEventResourceTypeEnum eventResourceType) {
        this.eventResourceType = eventResourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventStatus")
    public ConfigurationEventStatusEnum eventStatus;
    public ConfigurationEvent withEventStatus(ConfigurationEventStatusEnum eventStatus) {
        this.eventStatus = eventStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventTime")
    public OffsetDateTime eventTime;
    public ConfigurationEvent withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoredResourceARN")
    public String monitoredResourceARN;
    public ConfigurationEvent withMonitoredResourceArn(String monitoredResourceARN) {
        this.monitoredResourceARN = monitoredResourceARN;
        return this;
    }
}