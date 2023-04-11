import { SpeakeasyBase } from "../../../internal/utils";
import { ModifierGroup } from "./modifiergroup";
/**
 * ModifierGroups
 */
export declare class GetModifierGroupResponse extends SpeakeasyBase {
    data: ModifierGroup;
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
