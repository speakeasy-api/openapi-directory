import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStateEnum } from "./indexstateenum";
import { IndexTypeEnum } from "./indextypeenum";
/**
 * Success
 */
export declare class UpdateIndexTypeOutput extends SpeakeasyBase {
    arn?: string;
    lastUpdatedAt?: Date;
    state?: IndexStateEnum;
    type?: IndexTypeEnum;
}
