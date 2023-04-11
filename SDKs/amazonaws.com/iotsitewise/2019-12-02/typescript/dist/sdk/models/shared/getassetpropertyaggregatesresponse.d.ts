import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedValue } from "./aggregatedvalue";
/**
 * Success
 */
export declare class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
    aggregatedValues: AggregatedValue[];
    nextToken?: string;
}
