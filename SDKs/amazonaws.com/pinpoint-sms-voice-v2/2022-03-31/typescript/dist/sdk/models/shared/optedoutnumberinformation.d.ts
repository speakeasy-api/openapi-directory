import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The information for an opted out number in an Amazon Web Services account.
 */
export declare class OptedOutNumberInformation extends SpeakeasyBase {
    endUserOptedOut: boolean;
    optedOutNumber: string;
    optedOutTimestamp: Date;
}
