import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStateEnum } from "./indexstateenum";
import { IndexTypeEnum } from "./indextypeenum";
/**
 * Success
 */
export declare class GetIndexOutput extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    lastUpdatedAt?: Date;
    replicatingFrom?: string[];
    replicatingTo?: string[];
    state?: IndexStateEnum;
    tags?: Record<string, string>;
    type?: IndexTypeEnum;
}
