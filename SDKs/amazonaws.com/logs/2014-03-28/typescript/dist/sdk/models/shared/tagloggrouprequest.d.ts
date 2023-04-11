import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Please use the generic tagging API model TagResourceRequest
 */
export declare class TagLogGroupRequest extends SpeakeasyBase {
    logGroupName: string;
    tags: Record<string, string>;
}
