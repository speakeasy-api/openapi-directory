import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListSecretsRequest extends SpeakeasyBase {
    filters?: Filter[];
    includePlannedDeletion?: boolean;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderTypeEnum;
}
