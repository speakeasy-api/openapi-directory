package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Session {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumer_metadata")
    public ConsumerMetadata consumerMetadata;
    public Session withConsumerMetadata(ConsumerMetadata consumerMetadata) {
        this.consumerMetadata = consumerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_consumer_settings")
    public java.util.Map<String, Object> customConsumerSettings;
    public Session withCustomConsumerSettings(java.util.Map<String, Object> customConsumerSettings) {
        this.customConsumerSettings = customConsumerSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_uri")
    public String redirectUri;
    public Session withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public SessionSettings settings;
    public Session withSettings(SessionSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public SessionTheme theme;
    public Session withTheme(SessionTheme theme) {
        this.theme = theme;
        return this;
    }
}