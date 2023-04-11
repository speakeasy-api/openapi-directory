import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Details of the new API Application
 */
export declare class CreateApiApplicationNewApiApplication extends SpeakeasyBase {
    /**
     * A name for the API Application to help you identify it
     */
    applicationName?: string;
    /**
     * Whether or not this API Application can be used
     */
    enabled?: boolean;
    /**
     * The date that this API Application can no longer be used.
     */
    expiry?: Date;
    /**
     * The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.
     */
    ican?: number;
    /**
     * Number of approvals required to create a payee in a batch
     */
    numberOfPayeeApprovalsRequired?: number;
    /**
     * Number of approvals required to process a payment in a batch
     */
    numberOfPaymentApprovalsRequired?: number;
    /**
     * The list of permissions required
     */
    permissions?: string[];
}
/**
 * API Application created successfully
 */
export declare class CreateApiApplicationApiApplication extends SpeakeasyBase {
    /**
     * The ID of the API Application
     */
    applicationId?: number;
    /**
     * The Client ID of the new API Application
     */
    clientId?: string;
    /**
     * The Client Key of the new API Application
     */
    clientKey?: string;
    /**
     * Whether or not this API Application can be used
     */
    enabled?: boolean;
    /**
     * The date that this API Application can no longer be used.
     */
    expiry?: Date;
    /**
     * The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.
     */
    ican?: number;
    /**
     * Number of approvals required to create a payee in a batch
     */
    numberOfPayeeApprovalsRequired?: number;
    /**
     * Number of approvals required to process a payment in a batch
     */
    numberOfPaymentApprovalsRequired?: number;
    /**
     * The Refresh Token of the new API Application
     */
    refreshToken?: string;
}
export declare class CreateApiApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * API Application created successfully
     */
    apiApplication?: CreateApiApplicationApiApplication;
}
