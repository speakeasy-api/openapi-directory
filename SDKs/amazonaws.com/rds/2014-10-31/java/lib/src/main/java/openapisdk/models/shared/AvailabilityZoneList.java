package openapisdk.models.shared;



/**
 * AvailabilityZoneList
 * <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
**/
public class AvailabilityZoneList {
    public String name;
    public AvailabilityZoneList withName(String name) {
        this.name = name;
        return this;
    }
}