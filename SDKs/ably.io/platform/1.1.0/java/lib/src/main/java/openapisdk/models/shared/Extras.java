package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * Extras
 * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
**/
public class Extras {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push")
@SpeakeasyMetadata("form:name=push")
    public Push push;
    public Extras withPush(Push push) {
        this.push = push;
        return this;
    }
}