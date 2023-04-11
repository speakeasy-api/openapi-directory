import { SpeakeasyBase } from "../../../internal/utils";
import { SpendLimitNameEnum } from "./spendlimitnameenum";
/**
 * Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.
 */
export declare class SpendLimit extends SpeakeasyBase {
    enforcedLimit: number;
    maxLimit: number;
    name: SpendLimitNameEnum;
    overridden: boolean;
}
