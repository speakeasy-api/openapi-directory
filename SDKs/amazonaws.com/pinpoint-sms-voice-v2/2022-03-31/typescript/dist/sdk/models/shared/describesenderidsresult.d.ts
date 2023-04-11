import { SpeakeasyBase } from "../../../internal/utils";
import { SenderIdInformation } from "./senderidinformation";
/**
 * Success
 */
export declare class DescribeSenderIdsResult extends SpeakeasyBase {
    nextToken?: string;
    senderIds?: SenderIdInformation[];
}
