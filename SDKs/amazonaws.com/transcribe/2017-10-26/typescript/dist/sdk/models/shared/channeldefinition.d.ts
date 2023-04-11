import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantRoleEnum } from "./participantroleenum";
/**
 * Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to indicate that it's the agent speaking).
 */
export declare class ChannelDefinition extends SpeakeasyBase {
    channelId?: number;
    participantRole?: ParticipantRoleEnum;
}
