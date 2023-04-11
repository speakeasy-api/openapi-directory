import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * An object that contains information about an entity.
 */
export declare class EntitySummary extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    description?: string;
    entityId: string;
    entityName: string;
    hasChildEntities?: boolean;
    parentEntityId?: string;
    status: Status;
    updateDateTime: Date;
}
