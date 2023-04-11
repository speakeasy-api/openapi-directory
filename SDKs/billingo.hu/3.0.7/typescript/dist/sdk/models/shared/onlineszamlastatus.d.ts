import { SpeakeasyBase } from "../../../internal/utils";
import { OnlineSzamlaStatusMessage } from "./onlineszamlastatusmessage";
/**
 * Success response
 */
export declare class OnlineSzamlaStatus extends SpeakeasyBase {
    messages?: OnlineSzamlaStatusMessage[];
    status?: string;
    transactionId?: string;
}
