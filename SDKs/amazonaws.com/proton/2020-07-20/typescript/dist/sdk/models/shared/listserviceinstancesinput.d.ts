import { SpeakeasyBase } from "../../../internal/utils";
import { ListServiceInstancesFilter } from "./listserviceinstancesfilter";
import { ListServiceInstancesSortByEnum } from "./listserviceinstancessortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListServiceInstancesInput extends SpeakeasyBase {
    filters?: ListServiceInstancesFilter[];
    maxResults?: number;
    nextToken?: string;
    serviceName?: string;
    sortBy?: ListServiceInstancesSortByEnum;
    sortOrder?: SortOrderEnum;
}
