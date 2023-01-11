import { SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";
import { TimelineUpdate } from "./timelineupdate";
export declare class CollectionUpdate extends SpeakeasyBase {
    articles?: number[];
    authors?: Record<string, any>[];
    categories?: number[];
    customFields?: Record<string, any>;
    description?: string;
    doi?: string;
    funding?: string;
    fundingList?: FundingCreate[];
    groupId?: number;
    handle?: string;
    keywords?: string[];
    references?: string[];
    resourceDoi?: string;
    resourceId?: string;
    resourceLink?: string;
    resourceTitle?: string;
    resourceVersion?: number;
    tags?: string[];
    timeline?: TimelineUpdate;
    title?: string;
}
