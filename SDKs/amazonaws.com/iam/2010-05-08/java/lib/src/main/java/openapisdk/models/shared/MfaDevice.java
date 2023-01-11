package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * MfaDevice
 * <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
**/
public class MfaDevice {
    public OffsetDateTime enableDate;
    public MfaDevice withEnableDate(OffsetDateTime enableDate) {
        this.enableDate = enableDate;
        return this;
    }
    public String serialNumber;
    public MfaDevice withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    public String userName;
    public MfaDevice withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}