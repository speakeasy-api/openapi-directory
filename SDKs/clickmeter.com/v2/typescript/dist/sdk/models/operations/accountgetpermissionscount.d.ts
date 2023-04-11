import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum AccountGetPermissionsCountEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
/**
 * Can be "w" or "r"
 */
export declare enum AccountGetPermissionsCountTypeEnum {
    R = "r",
    W = "w"
}
export declare class AccountGetPermissionsCountRequest extends SpeakeasyBase {
    /**
     * Optional id of the datapoint/group entity to filter by
     */
    entityId?: number;
    /**
     * Can be "datapoint" or "group"
     */
    entityType?: AccountGetPermissionsCountEntityTypeEnum;
    /**
     * Id of the guest
     */
    guestId: number;
    /**
     * Can be "w" or "r"
     */
    type?: AccountGetPermissionsCountTypeEnum;
}
export declare class AccountGetPermissionsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
