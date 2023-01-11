import { SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";
import { TimelineUpdate } from "./timelineupdate";
export declare class ArticleProjectCreate extends SpeakeasyBase {
    authors?: Record<string, any>[];
    categories?: number[];
    customFields?: Record<string, any>;
    definedType?: string;
    description?: string;
    doi?: string;
    funding?: string;
    fundingList?: FundingCreate[];
    handle?: string;
    keywords?: string[];
    license?: number;
    references?: string[];
    resourceDoi?: string;
    resourceTitle?: string;
    tags?: string[];
    timeline?: TimelineUpdate;
    title: string;
}
