import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentGroupList } from "./segmentgrouplist";
import { SegmentImportResource } from "./segmentimportresource";
import { SegmentTypeEnum } from "./segmenttypeenum";
/**
 * Provides information about the configuration, dimension, and other settings for a segment.
 */
export declare class SegmentResponse extends SpeakeasyBase {
    applicationId: string;
    arn: string;
    creationDate: string;
    dimensions?: SegmentDimensions;
    id: string;
    importDefinition?: SegmentImportResource;
    lastModifiedDate?: string;
    name?: string;
    segmentGroups?: SegmentGroupList;
    segmentType: SegmentTypeEnum;
    version?: number;
    tags?: Record<string, string>;
}
