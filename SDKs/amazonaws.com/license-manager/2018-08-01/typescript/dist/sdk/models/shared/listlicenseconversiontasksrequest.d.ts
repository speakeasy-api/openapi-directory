import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListLicenseConversionTasksRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
