import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteTagsRequestTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    resources: string[];
    tags?: DeleteTagsRequestTags[];
}
