import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for <code>UntagResource</code> action.
 */
export declare class UntagResourceRequest extends SpeakeasyBase {
    resourceARN: string;
    tagKeys: string[];
}
