import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Your api credential
 */
export declare class ApiCredential extends SpeakeasyBase {
    /**
     * The primary token to be used in the next call in the user scope API
     */
    primaryToken?: string;
    /**
     * The product name related to this credential
     */
    productName?: string;
    /**
     * The secondary token. Could be usefull if you want to share your access with someone else.
     */
    secondaryToken?: string;
}
