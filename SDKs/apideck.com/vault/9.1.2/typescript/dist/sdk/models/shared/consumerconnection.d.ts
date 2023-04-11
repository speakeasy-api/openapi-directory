import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
export declare enum ConsumerConnectionStateEnum {
    Available = "available",
    Callable = "callable",
    Added = "added",
    Configured = "configured",
    Authorized = "authorized"
}
export declare class ConsumerConnection extends SpeakeasyBase {
    /**
     * Type of authorization used by the connector
     */
    authType?: AuthTypeEnum;
    consumerId?: string;
    createdAt?: string;
    enabled?: boolean;
    icon?: string;
    id?: string;
    logo?: string;
    /**
     * Attach your own consumer specific metadata
     */
    metadata?: Record<string, any>;
    name?: string;
    serviceId?: string;
    /**
     * Connection settings. Values will persist to `form_fields` with corresponding id
     */
    settings?: Record<string, any>;
    state?: ConsumerConnectionStateEnum;
    tagLine?: string;
    unifiedApi?: string;
    updatedAt?: string;
    website?: string;
}
