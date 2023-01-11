package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PhoneList
 * Phones List
**/
public class PhoneList {
    @JsonProperty("phones")
    public Phone[] phones;
    public PhoneList withPhones(Phone[] phones) {
        this.phones = phones;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public PhoneList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}