import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Log operation
 */
export declare class LogOperation extends SpeakeasyBase {
    /**
     * Operation type ID
     */
    id: number;
    /**
     * Determines whether log operation is deprecated or not
     */
    isDeprecated: boolean;
    /**
     * Operation name
     */
    name: string;
}
