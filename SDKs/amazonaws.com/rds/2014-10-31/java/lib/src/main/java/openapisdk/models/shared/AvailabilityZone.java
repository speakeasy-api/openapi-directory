package openapisdk.models.shared;



/**
 * AvailabilityZone
 * <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
**/
public class AvailabilityZone {
    public String name;
    public AvailabilityZone withName(String name) {
        this.name = name;
        return this;
    }
}