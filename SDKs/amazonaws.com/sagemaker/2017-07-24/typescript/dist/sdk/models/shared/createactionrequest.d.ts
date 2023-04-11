import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
export declare class CreateActionRequest extends SpeakeasyBase {
    actionName: string;
    actionType: string;
    description?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    properties?: Record<string, string>;
    source: ActionSource;
    status?: ActionStatusEnum;
    tags?: Tag[];
}
