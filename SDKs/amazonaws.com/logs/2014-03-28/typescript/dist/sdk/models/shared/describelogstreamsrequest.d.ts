import { SpeakeasyBase } from "../../../internal/utils";
import { OrderByEnum } from "./orderbyenum";
export declare class DescribeLogStreamsRequest extends SpeakeasyBase {
    descending?: boolean;
    limit?: number;
    logGroupIdentifier?: string;
    logGroupName?: string;
    logStreamNamePrefix?: string;
    nextToken?: string;
    orderBy?: OrderByEnum;
}
