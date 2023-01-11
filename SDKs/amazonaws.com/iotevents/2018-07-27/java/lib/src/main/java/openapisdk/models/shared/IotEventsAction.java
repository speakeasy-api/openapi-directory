package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IotEventsAction
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
**/
public class IotEventsAction {
    @JsonProperty("inputName")
    public String inputName;
    public IotEventsAction withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Payload payload;
    public IotEventsAction withPayload(Payload payload) {
        this.payload = payload;
        return this;
    }
}