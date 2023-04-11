import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 * The properties that are applied when the custom connector is being used as a destination.
 */
export declare class CustomConnectorDestinationProperties extends SpeakeasyBase {
    customProperties?: Record<string, string>;
    entityName: string;
    errorHandlingConfig?: ErrorHandlingConfig;
    idFieldNames?: string[];
    writeOperationType?: WriteOperationTypeEnum;
}
