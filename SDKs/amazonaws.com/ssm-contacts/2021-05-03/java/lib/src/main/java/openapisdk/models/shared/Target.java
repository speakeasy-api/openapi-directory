package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * The contact or contact channel that's being engaged.
**/
public class Target {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelTargetInfo")
    public ChannelTargetInfo channelTargetInfo;
    public Target withChannelTargetInfo(ChannelTargetInfo channelTargetInfo) {
        this.channelTargetInfo = channelTargetInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactTargetInfo")
    public ContactTargetInfo contactTargetInfo;
    public Target withContactTargetInfo(ContactTargetInfo contactTargetInfo) {
        this.contactTargetInfo = contactTargetInfo;
        return this;
    }
}