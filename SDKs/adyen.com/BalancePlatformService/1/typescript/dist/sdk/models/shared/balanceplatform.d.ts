import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class BalancePlatform extends SpeakeasyBase {
    /**
     * Your description of the balance platform, maximum 300 characters.
     */
    description?: string;
    /**
     * The unique identifier of the balance platform.
     */
    id: string;
    /**
     * The status of the balance platform.
     *
     * @remarks
     *
     * Possible values: **Active**, **Inactive**, **Closed**, **Suspended**.
     */
    status?: string;
}
