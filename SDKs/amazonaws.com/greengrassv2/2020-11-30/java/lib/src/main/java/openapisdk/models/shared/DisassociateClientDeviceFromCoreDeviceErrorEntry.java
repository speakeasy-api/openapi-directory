package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisassociateClientDeviceFromCoreDeviceErrorEntry
 * Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
public class DisassociateClientDeviceFromCoreDeviceErrorEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public DisassociateClientDeviceFromCoreDeviceErrorEntry withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DisassociateClientDeviceFromCoreDeviceErrorEntry withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public DisassociateClientDeviceFromCoreDeviceErrorEntry withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}