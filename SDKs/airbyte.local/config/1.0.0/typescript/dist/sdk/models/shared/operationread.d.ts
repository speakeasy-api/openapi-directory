import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorConfiguration } from "./operatorconfiguration";
/**
 * Successful operation
 */
export declare class OperationRead extends SpeakeasyBase {
    name: string;
    operationId: string;
    operatorConfiguration: OperatorConfiguration;
    workspaceId: string;
}
