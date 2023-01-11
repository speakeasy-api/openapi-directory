package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IotEventsInputIdentifier
 *  The identifier of the input routed to AWS IoT Events. 
**/
public class IotEventsInputIdentifier {
    @JsonProperty("inputName")
    public String inputName;
    public IotEventsInputIdentifier withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
}