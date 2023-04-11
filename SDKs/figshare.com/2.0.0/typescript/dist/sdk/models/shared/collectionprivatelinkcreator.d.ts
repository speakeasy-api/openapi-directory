import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionPrivateLinkCreator extends SpeakeasyBase {
    /**
     * Date when this private link should expire - optional. By default private links expire in 365 days.
     */
    expiresDate?: string;
    /**
     * Optional, default true. Set to false to give private link users editing rights for this collection.
     */
    readOnly?: boolean;
}
