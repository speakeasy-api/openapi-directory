import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The request information for tagging a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
 */
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceARN: string;
    tags: Tag[];
}
