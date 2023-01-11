package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Hook
 * Webhooks for repositories.
**/
public class Hook {
    @JsonProperty("active")
    public Boolean active;
    public Hook withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("config")
    public HookConfig config;
    public Hook withConfig(HookConfig config) {
        this.config = config;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Hook withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("events")
    public String[] events;
    public Hook withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Hook withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("last_response")
    public HookResponse lastResponse;
    public Hook withLastResponse(HookResponse lastResponse) {
        this.lastResponse = lastResponse;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Hook withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ping_url")
    public String pingUrl;
    public Hook withPingUrl(String pingUrl) {
        this.pingUrl = pingUrl;
        return this;
    }
    @JsonProperty("test_url")
    public String testUrl;
    public Hook withTestUrl(String testUrl) {
        this.testUrl = testUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Hook withType(String type) {
        this.type = type;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Hook withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Hook withUrl(String url) {
        this.url = url;
        return this;
    }
}