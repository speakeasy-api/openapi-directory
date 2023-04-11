import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request information to remove a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
 */
export declare class UntagResourceRequest extends SpeakeasyBase {
    resourceARN: string;
    tagKeys: string[];
}
