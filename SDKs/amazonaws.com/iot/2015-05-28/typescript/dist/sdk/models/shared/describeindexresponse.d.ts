import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
/**
 * Success
 */
export declare class DescribeIndexResponse extends SpeakeasyBase {
    indexName?: string;
    indexStatus?: IndexStatusEnum;
    schema?: string;
}
