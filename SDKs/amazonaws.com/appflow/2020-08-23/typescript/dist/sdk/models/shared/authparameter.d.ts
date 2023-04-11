import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about required authentication parameters.
 */
export declare class AuthParameter extends SpeakeasyBase {
    connectorSuppliedValues?: string[];
    description?: string;
    isRequired?: boolean;
    isSensitiveField?: boolean;
    key?: string;
    label?: string;
}
