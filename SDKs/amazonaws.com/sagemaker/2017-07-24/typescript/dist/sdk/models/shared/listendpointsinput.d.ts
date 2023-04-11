import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointSortKeyEnum } from "./endpointsortkeyenum";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { OrderKeyEnum } from "./orderkeyenum";
export declare class ListEndpointsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: EndpointSortKeyEnum;
    sortOrder?: OrderKeyEnum;
    statusEquals?: EndpointStatusEnum;
}
