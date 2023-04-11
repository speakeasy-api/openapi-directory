import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateTagsRequestTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    resources: string[];
    tags: CreateTagsRequestTags[];
}
