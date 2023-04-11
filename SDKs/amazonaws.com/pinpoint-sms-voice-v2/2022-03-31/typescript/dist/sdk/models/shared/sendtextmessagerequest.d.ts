import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
export declare class SendTextMessageRequest extends SpeakeasyBase {
    configurationSetName?: string;
    context?: Record<string, string>;
    destinationCountryParameters?: Record<string, string>;
    destinationPhoneNumber: string;
    dryRun?: boolean;
    keyword?: string;
    maxPrice?: string;
    messageBody?: string;
    messageType?: MessageTypeEnum;
    originationIdentity?: string;
    timeToLive?: number;
}
