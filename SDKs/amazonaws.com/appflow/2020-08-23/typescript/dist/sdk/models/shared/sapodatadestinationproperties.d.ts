import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { SuccessResponseHandlingConfig } from "./successresponsehandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 * The properties that are applied when using SAPOData as a flow destination
 */
export declare class SAPODataDestinationProperties extends SpeakeasyBase {
    /**
     *  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
     */
    errorHandlingConfig?: ErrorHandlingConfig;
    /**
     *  A list of field names that can be used as an ID field when performing a write operation.
     */
    idFieldNames?: string[];
    objectPath: string;
    successResponseHandlingConfig?: SuccessResponseHandlingConfig;
    /**
     *  The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation.
     */
    writeOperationType?: WriteOperationTypeEnum;
}
