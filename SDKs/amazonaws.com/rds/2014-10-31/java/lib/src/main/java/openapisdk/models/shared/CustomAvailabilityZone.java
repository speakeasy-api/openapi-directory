package openapisdk.models.shared;



/**
 * CustomAvailabilityZone
 * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
**/
public class CustomAvailabilityZone {
    public String customAvailabilityZoneId;
    public CustomAvailabilityZone withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    public String customAvailabilityZoneName;
    public CustomAvailabilityZone withCustomAvailabilityZoneName(String customAvailabilityZoneName) {
        this.customAvailabilityZoneName = customAvailabilityZoneName;
        return this;
    }
    public String customAvailabilityZoneStatus;
    public CustomAvailabilityZone withCustomAvailabilityZoneStatus(String customAvailabilityZoneStatus) {
        this.customAvailabilityZoneStatus = customAvailabilityZoneStatus;
        return this;
    }
    public VpnDetails vpnDetails;
    public CustomAvailabilityZone withVpnDetails(VpnDetails vpnDetails) {
        this.vpnDetails = vpnDetails;
        return this;
    }
}