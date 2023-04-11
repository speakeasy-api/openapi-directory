import { SpeakeasyBase } from "../../../internal/utils";
import { KnownFraudsterRisk } from "./knownfraudsterrisk";
import { VoiceSpoofingRisk } from "./voicespoofingrisk";
/**
 * Details regarding various fraud risk analyses performed against the current session state and streamed audio of the speaker.
 */
export declare class FraudRiskDetails extends SpeakeasyBase {
    knownFraudsterRisk: KnownFraudsterRisk;
    voiceSpoofingRisk: VoiceSpoofingRisk;
}
