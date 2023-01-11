package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelDefinition
 * For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio channel that belongs to the customer.
**/
public class ChannelDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelId")
    public Long channelId;
    public ChannelDefinition withChannelId(Long channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantRole")
    public ParticipantRoleEnum participantRole;
    public ChannelDefinition withParticipantRole(ParticipantRoleEnum participantRole) {
        this.participantRole = participantRole;
        return this;
    }
}