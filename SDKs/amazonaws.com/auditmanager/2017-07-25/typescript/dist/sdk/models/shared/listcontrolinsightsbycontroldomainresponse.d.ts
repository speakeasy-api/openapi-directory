import { SpeakeasyBase } from "../../../internal/utils";
import { ControlInsightsMetadataItem } from "./controlinsightsmetadataitem";
/**
 * Success
 */
export declare class ListControlInsightsByControlDomainResponse extends SpeakeasyBase {
    controlInsightsMetadata?: ControlInsightsMetadataItem[];
    nextToken?: string;
}
