import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListReceivedLicensesForOrganizationRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
