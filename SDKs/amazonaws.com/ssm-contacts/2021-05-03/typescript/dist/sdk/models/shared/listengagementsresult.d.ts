import { SpeakeasyBase } from "../../../internal/utils";
import { Engagement } from "./engagement";
/**
 * Success
 */
export declare class ListEngagementsResult extends SpeakeasyBase {
    engagements: Engagement[];
    nextToken?: string;
}
