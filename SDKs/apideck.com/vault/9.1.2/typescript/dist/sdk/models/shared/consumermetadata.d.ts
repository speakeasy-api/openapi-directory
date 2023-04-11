import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
 */
export declare class ConsumerMetadata extends SpeakeasyBase {
    /**
     * The name of the account as shown in the sidebar.
     */
    accountName?: string;
    /**
     * The email of the user as shown in the sidebar.
     */
    email?: string;
    /**
     * The avatar of the user in the sidebar. Must be a valid URL
     */
    image?: string;
    /**
     * The name of the user as shown in the sidebar.
     */
    userName?: string;
}
