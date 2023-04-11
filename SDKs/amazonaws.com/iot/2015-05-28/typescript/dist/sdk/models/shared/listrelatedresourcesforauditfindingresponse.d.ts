import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedResource } from "./relatedresource";
/**
 * Success
 */
export declare class ListRelatedResourcesForAuditFindingResponse extends SpeakeasyBase {
    nextToken?: string;
    relatedResources?: RelatedResource[];
}
