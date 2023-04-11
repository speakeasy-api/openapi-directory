import { SpeakeasyBase } from "../../../internal/utils";
import { EntityFilter } from "./entityfilter";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class SearchEntitiesRequest extends SpeakeasyBase {
    entityTypes: EntityTypeEnum[];
    filters?: EntityFilter[];
    maxResults?: number;
    namespaceVersion?: number;
    nextToken?: string;
}
