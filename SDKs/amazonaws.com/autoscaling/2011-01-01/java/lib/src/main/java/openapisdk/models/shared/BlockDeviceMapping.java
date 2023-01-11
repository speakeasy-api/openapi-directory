package openapisdk.models.shared;



/**
 * BlockDeviceMapping
 * Describes a block device mapping.
**/
public class BlockDeviceMapping {
    public String deviceName;
    public BlockDeviceMapping withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    public Ebs ebs;
    public BlockDeviceMapping withEbs(Ebs ebs) {
        this.ebs = ebs;
        return this;
    }
    public Boolean noDevice;
    public BlockDeviceMapping withNoDevice(Boolean noDevice) {
        this.noDevice = noDevice;
        return this;
    }
    public String virtualName;
    public BlockDeviceMapping withVirtualName(String virtualName) {
        this.virtualName = virtualName;
        return this;
    }
}