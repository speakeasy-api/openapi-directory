import { SpeakeasyBase } from "../../../internal/utils";
import { AlertManagerDefinitionStatus } from "./alertmanagerdefinitionstatus";
/**
 * Represents the properties of an alert manager definition.
 */
export declare class AlertManagerDefinitionDescription extends SpeakeasyBase {
    createdAt: Date;
    data: string;
    modifiedAt: Date;
    status: AlertManagerDefinitionStatus;
}
