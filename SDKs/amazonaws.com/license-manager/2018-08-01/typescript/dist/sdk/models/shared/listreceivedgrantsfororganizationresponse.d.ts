import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
/**
 * Success
 */
export declare class ListReceivedGrantsForOrganizationResponse extends SpeakeasyBase {
    grants?: Grant[];
    nextToken?: string;
}
