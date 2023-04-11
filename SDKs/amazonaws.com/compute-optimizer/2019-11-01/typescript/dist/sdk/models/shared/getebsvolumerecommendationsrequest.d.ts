import { SpeakeasyBase } from "../../../internal/utils";
import { EBSFilter } from "./ebsfilter";
export declare class GetEBSVolumeRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    filters?: EBSFilter[];
    maxResults?: number;
    nextToken?: string;
    volumeArns?: string[];
}
