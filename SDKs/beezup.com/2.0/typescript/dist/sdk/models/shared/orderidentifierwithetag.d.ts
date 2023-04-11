import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderIdentifierWithETag extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * ETag value to identify the order.\
     *
     * @remarks
     * This information is required for the operation GetOrder and ChangeOrder.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     *
     */
    etag: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
}
