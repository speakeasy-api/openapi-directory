import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
 */
export declare enum GetIntegrationResponseResponseContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
/**
 * Success
 */
export declare class GetIntegrationResponseResponse extends SpeakeasyBase {
    contentHandlingStrategy?: GetIntegrationResponseResponseContentHandlingStrategyEnum;
    integrationResponseId?: string;
    integrationResponseKey?: string;
    responseParameters?: Record<string, string>;
    responseTemplates?: Record<string, string>;
    templateSelectionExpression?: string;
}
