package openapisdk.models.shared;



/**
 * OptionGroupOptionVersionsList
 * The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
**/
public class OptionGroupOptionVersionsList {
    public Boolean isDefault;
    public OptionGroupOptionVersionsList withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public String version;
    public OptionGroupOptionVersionsList withVersion(String version) {
        this.version = version;
        return this;
    }
}