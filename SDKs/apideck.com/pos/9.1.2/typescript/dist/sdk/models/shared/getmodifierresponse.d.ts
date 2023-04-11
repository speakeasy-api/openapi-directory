import { SpeakeasyBase } from "../../../internal/utils";
import { Modifier } from "./modifier";
/**
 * Modifiers
 */
export declare class GetModifierResponse extends SpeakeasyBase {
    data: Modifier;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
