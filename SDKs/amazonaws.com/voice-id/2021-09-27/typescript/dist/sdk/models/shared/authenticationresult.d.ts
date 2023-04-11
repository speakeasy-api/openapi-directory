import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { AuthenticationDecisionEnum } from "./authenticationdecisionenum";
/**
 * The authentication result produced by Voice ID, processed against the current session state and streamed audio of the speaker.
 */
export declare class AuthenticationResult extends SpeakeasyBase {
    audioAggregationEndedAt?: Date;
    audioAggregationStartedAt?: Date;
    authenticationResultId?: string;
    configuration?: AuthenticationConfiguration;
    customerSpeakerId?: string;
    decision?: AuthenticationDecisionEnum;
    generatedSpeakerId?: string;
    score?: number;
}
