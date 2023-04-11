import { SpeakeasyBase } from "../../../internal/utils";
import { ApiStatusEnum } from "./apistatusenum";
/**
 * Apply filters
 */
export declare class ApisFilter extends SpeakeasyBase {
    /**
     * Status of the API. APIs with status live or beta are callable.
     */
    status?: ApiStatusEnum;
}
