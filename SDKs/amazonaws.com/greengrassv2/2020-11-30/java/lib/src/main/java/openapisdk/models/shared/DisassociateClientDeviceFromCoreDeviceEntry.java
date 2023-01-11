package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisassociateClientDeviceFromCoreDeviceEntry
 * Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
**/
public class DisassociateClientDeviceFromCoreDeviceEntry {
    @JsonProperty("thingName")
    public String thingName;
    public DisassociateClientDeviceFromCoreDeviceEntry withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}