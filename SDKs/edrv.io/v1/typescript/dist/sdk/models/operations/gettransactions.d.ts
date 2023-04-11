import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Started to get only active transactions
 */
export declare enum GetTransactionsStatusEnum {
    Started = "Started",
    Ended = "Ended"
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    /**
     * Date as ISO String
     */
    createdAtDollarGte?: Date;
    /**
     * Date as ISO String
     */
    createdAtDollarLte?: Date;
    /**
     * Populate chargestation
     */
    includeChargestation?: boolean;
    /**
     * Populate connector
     */
    includeConnector?: boolean;
    /**
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate evse
     */
    includeEvse?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate rate
     */
    includeRate?: boolean;
    /**
     * Populate reservation
     */
    includeReservation?: boolean;
    /**
     * Populate token
     */
    includeToken?: boolean;
    /**
     * Enable pagination
     */
    paginateEnabled?: boolean;
    /**
     * Number of results per page
     */
    paginateLimit?: number;
    /**
     * The queried page index
     */
    paginatePage?: string;
    /**
     * Sort data by this key
     */
    sortBy?: string;
    /**
     * asc to sort ascending (default is desc - descending)
     */
    sortOrder?: shared.SortOrder1Enum;
    /**
     * Started to get only active transactions
     */
    status?: GetTransactionsStatusEnum;
    /**
     * Date as ISO String
     */
    updatedAtDollarGte?: Date;
    /**
     * Date as ISO String
     */
    updatedAtDollarLte?: Date;
}
/**
 * Returns an array of transaction objects
 */
export declare class GetTransactions200ApplicationJSON extends SpeakeasyBase {
    hasNext?: boolean;
    hasPrevious?: boolean;
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns an array of transaction objects
     */
    getTransactions200ApplicationJSONObject?: GetTransactions200ApplicationJSON;
}
