import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * The information for all SenderIds in an Amazon Web Services account.
 */
export declare class SenderIdInformation extends SpeakeasyBase {
    isoCountryCode: string;
    messageTypes: MessageTypeEnum[];
    monthlyLeasingPrice: string;
    senderId: string;
    senderIdArn: string;
}
