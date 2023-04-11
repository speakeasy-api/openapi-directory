import { SpeakeasyBase } from "../../../internal/utils";
import { AlertManagerDefinitionStatusCodeEnum } from "./alertmanagerdefinitionstatuscodeenum";
/**
 * Represents the status of a definition.
 */
export declare class AlertManagerDefinitionStatus extends SpeakeasyBase {
    statusCode: AlertManagerDefinitionStatusCodeEnum;
    statusReason?: string;
}
