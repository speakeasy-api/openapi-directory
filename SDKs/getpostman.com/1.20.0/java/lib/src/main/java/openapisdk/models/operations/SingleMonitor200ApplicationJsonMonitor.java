package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionUid")
    public String collectionUid;
    public SingleMonitor200ApplicationJsonMonitor withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public Object[] distribution;
    public SingleMonitor200ApplicationJsonMonitor withDistribution(Object[] distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentUid")
    public String environmentUid;
    public SingleMonitor200ApplicationJsonMonitor withEnvironmentUid(String environmentUid) {
        this.environmentUid = environmentUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SingleMonitor200ApplicationJsonMonitor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRun")
    public SingleMonitor200ApplicationJsonMonitorLastRun lastRun;
    public SingleMonitor200ApplicationJsonMonitor withLastRun(SingleMonitor200ApplicationJsonMonitorLastRun lastRun) {
        this.lastRun = lastRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleMonitor200ApplicationJsonMonitor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public SingleMonitor200ApplicationJsonMonitorNotifications notifications;
    public SingleMonitor200ApplicationJsonMonitor withNotifications(SingleMonitor200ApplicationJsonMonitorNotifications notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public SingleMonitor200ApplicationJsonMonitorOptions options;
    public SingleMonitor200ApplicationJsonMonitor withOptions(SingleMonitor200ApplicationJsonMonitorOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public SingleMonitor200ApplicationJsonMonitor withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public SingleMonitor200ApplicationJsonMonitorSchedule schedule;
    public SingleMonitor200ApplicationJsonMonitor withSchedule(SingleMonitor200ApplicationJsonMonitorSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public SingleMonitor200ApplicationJsonMonitor withUid(String uid) {
        this.uid = uid;
        return this;
    }
}