import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
export declare class UpdateGameSessionInput extends SpeakeasyBase {
    gameSessionId: string;
    maximumPlayerSessionCount?: number;
    name?: string;
    playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;
    protectionPolicy?: ProtectionPolicyEnum;
}
