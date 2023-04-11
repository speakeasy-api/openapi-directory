import { SpeakeasyBase } from "../../../internal/utils";
export declare class PermitResult extends SpeakeasyBase {
    /**
     * The key to link permit requests to permit results.
     */
    resultKey?: string;
    /**
     * The permit token which is used to make payments by the partner company.
     */
    token?: string;
}
