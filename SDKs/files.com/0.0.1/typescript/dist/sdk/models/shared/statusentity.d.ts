import { SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";
import { ErrorsEntity } from "./errorsentity";
/**
 * Test webhook.
 */
export declare class StatusEntity extends SpeakeasyBase {
    /**
     * Required Clickwrap body
     */
    clickwrapBody?: string;
    /**
     * Required Clickwrap id
     */
    clickwrapId?: number;
    /**
     * Status HTTP code
     */
    code?: number;
    data?: AutoEntity;
    /**
     * A list of api errors
     */
    errors?: ErrorsEntity[];
    /**
     * Error message
     */
    message?: string;
    /**
     * Status message
     */
    status?: string;
}
