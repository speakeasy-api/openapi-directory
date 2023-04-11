import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentResponse } from "./componentresponse";
import { Status } from "./status";
/**
 * Success
 */
export declare class GetEntityResponse extends SpeakeasyBase {
    arn: string;
    components?: Record<string, ComponentResponse>;
    creationDateTime: Date;
    description?: string;
    entityId: string;
    entityName: string;
    hasChildEntities: boolean;
    parentEntityId: string;
    status: Status;
    syncSource?: string;
    updateDateTime: Date;
    workspaceId: string;
}
