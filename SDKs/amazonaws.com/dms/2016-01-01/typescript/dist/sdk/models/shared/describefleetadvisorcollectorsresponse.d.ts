import { SpeakeasyBase } from "../../../internal/utils";
import { CollectorResponse } from "./collectorresponse";
/**
 * Success
 */
export declare class DescribeFleetAdvisorCollectorsResponse extends SpeakeasyBase {
    collectors?: CollectorResponse[];
    nextToken?: string;
}
