package openapisdk.models.shared;



/**
 * OptionGroups
 * List of option groups.
**/
public class OptionGroups {
    public String marker;
    public OptionGroups withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public OptionGroupsList[] optionGroupsList;
    public OptionGroups withOptionGroupsList(OptionGroupsList[] optionGroupsList) {
        this.optionGroupsList = optionGroupsList;
        return this;
    }
}