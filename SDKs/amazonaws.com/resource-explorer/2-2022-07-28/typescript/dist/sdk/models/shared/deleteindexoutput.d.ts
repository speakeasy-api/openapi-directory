import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStateEnum } from "./indexstateenum";
/**
 * Success
 */
export declare class DeleteIndexOutput extends SpeakeasyBase {
    arn?: string;
    lastUpdatedAt?: Date;
    state?: IndexStateEnum;
}
