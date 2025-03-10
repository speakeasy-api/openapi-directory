import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * The request to respond to an authentication challenge.
 */
export declare class RespondToAuthChallengeRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    challengeName: ChallengeNameTypeEnum;
    challengeResponses?: Record<string, string>;
    clientId: string;
    clientMetadata?: Record<string, string>;
    session?: string;
    userContextData?: UserContextDataType;
}
