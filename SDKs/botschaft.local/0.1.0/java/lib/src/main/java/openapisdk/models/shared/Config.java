package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Config {
    @JsonProperty("providers")
    public java.util.Map<String, Object> providers;
    public Config withProviders(java.util.Map<String, Object> providers) {
        this.providers = providers;
        return this;
    }
    @JsonProperty("topics")
    public Object[] topics;
    public Config withTopics(Object[] topics) {
        this.topics = topics;
        return this;
    }
}