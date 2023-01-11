package openapisdk.models.shared;



/**
 * CustomAvailabilityZoneList
 * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
**/
public class CustomAvailabilityZoneList {
    public String customAvailabilityZoneId;
    public CustomAvailabilityZoneList withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    public String customAvailabilityZoneName;
    public CustomAvailabilityZoneList withCustomAvailabilityZoneName(String customAvailabilityZoneName) {
        this.customAvailabilityZoneName = customAvailabilityZoneName;
        return this;
    }
    public String customAvailabilityZoneStatus;
    public CustomAvailabilityZoneList withCustomAvailabilityZoneStatus(String customAvailabilityZoneStatus) {
        this.customAvailabilityZoneStatus = customAvailabilityZoneStatus;
        return this;
    }
    public VpnDetails vpnDetails;
    public CustomAvailabilityZoneList withVpnDetails(VpnDetails vpnDetails) {
        this.vpnDetails = vpnDetails;
        return this;
    }
}