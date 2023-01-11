package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactChannelAddress
 * The details that Incident Manager uses when trying to engage the contact channel. 
**/
public class ContactChannelAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SimpleAddress")
    public String simpleAddress;
    public ContactChannelAddress withSimpleAddress(String simpleAddress) {
        this.simpleAddress = simpleAddress;
        return this;
    }
}