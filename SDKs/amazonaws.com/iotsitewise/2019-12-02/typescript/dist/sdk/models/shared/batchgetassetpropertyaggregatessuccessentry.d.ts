import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedValue } from "./aggregatedvalue";
/**
 * Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.
 */
export declare class BatchGetAssetPropertyAggregatesSuccessEntry extends SpeakeasyBase {
    aggregatedValues: AggregatedValue[];
    entryId: string;
}
