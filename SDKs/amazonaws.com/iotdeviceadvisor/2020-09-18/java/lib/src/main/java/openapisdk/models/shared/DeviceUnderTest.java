package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceUnderTest
 * Lists all the devices under test
**/
public class DeviceUnderTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public DeviceUnderTest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public DeviceUnderTest withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
}