import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeRecommendationsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxRecords?: number;
    nextToken?: string;
}
