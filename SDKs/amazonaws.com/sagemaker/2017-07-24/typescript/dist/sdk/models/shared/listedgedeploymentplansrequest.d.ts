import { SpeakeasyBase } from "../../../internal/utils";
import { ListEdgeDeploymentPlansSortByEnum } from "./listedgedeploymentplanssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListEdgeDeploymentPlansRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    deviceFleetNameContains?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListEdgeDeploymentPlansSortByEnum;
    sortOrder?: SortOrderEnum;
}
