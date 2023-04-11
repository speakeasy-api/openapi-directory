import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListReceivedGrantsForOrganizationRequest extends SpeakeasyBase {
    filters?: Filter[];
    licenseArn: string;
    maxResults?: number;
    nextToken?: string;
}
