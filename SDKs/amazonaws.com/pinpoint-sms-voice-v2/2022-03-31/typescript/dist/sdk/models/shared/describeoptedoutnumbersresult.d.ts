import { SpeakeasyBase } from "../../../internal/utils";
import { OptedOutNumberInformation } from "./optedoutnumberinformation";
/**
 * Success
 */
export declare class DescribeOptedOutNumbersResult extends SpeakeasyBase {
    nextToken?: string;
    optOutListArn?: string;
    optOutListName?: string;
    optedOutNumbers?: OptedOutNumberInformation[];
}
