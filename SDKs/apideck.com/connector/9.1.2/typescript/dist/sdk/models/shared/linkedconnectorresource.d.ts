import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
export declare class LinkedConnectorResource extends SpeakeasyBase {
    /**
     * ID of the resource in the Connector's API (downstream)
     */
    downstreamId?: string;
    /**
     * Name of the resource in the Connector's API (downstream)
     */
    downstreamName?: string;
    /**
     * ID of the resource, typically a lowercased version of name.
     */
    id?: string;
    /**
     * Name of the resource (plural)
     */
    name?: string;
    /**
     * Status of the resource. Resources with status live or beta are callable.
     */
    status?: ResourceStatusEnum;
}
