package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssociateClientDeviceWithCoreDeviceErrorEntry
 * Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
public class AssociateClientDeviceWithCoreDeviceErrorEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AssociateClientDeviceWithCoreDeviceErrorEntry withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AssociateClientDeviceWithCoreDeviceErrorEntry withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public AssociateClientDeviceWithCoreDeviceErrorEntry withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}