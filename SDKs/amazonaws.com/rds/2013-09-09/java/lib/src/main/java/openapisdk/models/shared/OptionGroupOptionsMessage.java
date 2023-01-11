package openapisdk.models.shared;



public class OptionGroupOptionsMessage {
    public String marker;
    public OptionGroupOptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public OptionGroupOptionsList[] optionGroupOptions;
    public OptionGroupOptionsMessage withOptionGroupOptions(OptionGroupOptionsList[] optionGroupOptions) {
        this.optionGroupOptions = optionGroupOptions;
        return this;
    }
}