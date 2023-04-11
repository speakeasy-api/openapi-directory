import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum AccountGetPermissionsEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
/**
 * Can be "w" or "r"
 */
export declare enum AccountGetPermissionsTypeEnum {
    R = "r",
    W = "w"
}
export declare class AccountGetPermissionsRequest extends SpeakeasyBase {
    /**
     * Optional id of the datapoint/group entity to filter by
     */
    entityId?: number;
    /**
     * Can be "datapoint" or "group"
     */
    entityType?: AccountGetPermissionsEntityTypeEnum;
    /**
     * Id of the guest
     */
    guestId: number;
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
    /**
     * Can be "w" or "r"
     */
    type?: AccountGetPermissionsTypeEnum;
}
export declare class AccountGetPermissionsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
