package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * OrgHook
 * Org Hook
**/
public class OrgHook {
    @JsonProperty("active")
    public Boolean active;
    public OrgHook withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("config")
    public OrgHookConfig config;
    public OrgHook withConfig(OrgHookConfig config) {
        this.config = config;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public OrgHook withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("events")
    public String[] events;
    public OrgHook withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public OrgHook withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OrgHook withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ping_url")
    public String pingUrl;
    public OrgHook withPingUrl(String pingUrl) {
        this.pingUrl = pingUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public OrgHook withType(String type) {
        this.type = type;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public OrgHook withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public OrgHook withUrl(String url) {
        this.url = url;
        return this;
    }
}