import { SpeakeasyBase } from "../../../internal/utils";
export declare enum APIRequestActionEnum {
    Read = "READ",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
export declare class APIRequestActor extends SpeakeasyBase {
    account?: string;
    id?: string;
    jti?: string;
    requestIp?: string;
    userAgent?: string;
}
export declare class APIRequestResourceItem extends SpeakeasyBase {
    id?: string;
}
export declare enum APIRequestResourceTypeEnum {
    Item = "ITEM",
    Vault = "VAULT"
}
export declare class APIRequestResourceVault extends SpeakeasyBase {
    id?: string;
}
export declare class APIRequestResource extends SpeakeasyBase {
    item?: APIRequestResourceItem;
    itemVersion?: number;
    type?: APIRequestResourceTypeEnum;
    vault?: APIRequestResourceVault;
}
export declare enum APIRequestResultEnum {
    Success = "SUCCESS",
    Deny = "DENY"
}
/**
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
 */
export declare class APIRequest extends SpeakeasyBase {
    action?: APIRequestActionEnum;
    actor?: APIRequestActor;
    /**
     * The unique id used to identify a single request.
     */
    requestId?: string;
    resource?: APIRequestResource;
    result?: APIRequestResultEnum;
    /**
     * The time at which the request was processed by the server.
     */
    timestamp?: Date;
}
