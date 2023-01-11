package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MessageInput
 * Message object.
**/
public class MessageInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
@SpeakeasyMetadata("form:name=clientId")
    public String clientId;
    public MessageInput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
@SpeakeasyMetadata("form:name=connectionId")
    public String connectionId;
    public MessageInput withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
@SpeakeasyMetadata("form:name=data")
    public String data;
    public MessageInput withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
@SpeakeasyMetadata("form:name=encoding")
    public String encoding;
    public MessageInput withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extras")
@SpeakeasyMetadata("form:name=extras")
    public Extras extras;
    public MessageInput withExtras(Extras extras) {
        this.extras = extras;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public MessageInput withName(String name) {
        this.name = name;
        return this;
    }
}