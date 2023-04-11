import { SpeakeasyBase } from "../../../internal/utils";
export declare class PrivateLink extends SpeakeasyBase {
    /**
     * Date when link will expire
     */
    expiresDate: string;
    /**
     * HTML url for private link
     */
    htmlLocation: string;
    /**
     * Private link id
     */
    id: string;
    /**
     * True if private link is active
     */
    isActive: boolean;
}
