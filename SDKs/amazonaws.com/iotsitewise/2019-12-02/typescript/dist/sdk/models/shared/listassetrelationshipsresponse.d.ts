import { SpeakeasyBase } from "../../../internal/utils";
import { AssetRelationshipSummary } from "./assetrelationshipsummary";
/**
 * Success
 */
export declare class ListAssetRelationshipsResponse extends SpeakeasyBase {
    assetRelationshipSummaries: AssetRelationshipSummary[];
    nextToken?: string;
}
