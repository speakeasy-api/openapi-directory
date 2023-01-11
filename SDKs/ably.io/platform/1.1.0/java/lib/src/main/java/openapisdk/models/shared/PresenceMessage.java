package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresenceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PresenceMessageActionEnum action;
    public PresenceMessage withAction(PresenceMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public PresenceMessage withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public PresenceMessage withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public PresenceMessage withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public String encoding;
    public PresenceMessage withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extras")
    public Extras extras;
    public PresenceMessage withExtras(Extras extras) {
        this.extras = extras;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PresenceMessage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public PresenceMessage withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}