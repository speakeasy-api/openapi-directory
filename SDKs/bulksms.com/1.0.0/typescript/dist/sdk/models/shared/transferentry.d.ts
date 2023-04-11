import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details of the transfer request.
 *
 * @remarks
 *
 */
export declare class TransferEntry extends SpeakeasyBase {
    /**
     * An optional note that will be shown on the credit history of your account.
     *
     * @remarks
     * The maximum length of the comment is 100.
     *
     */
    commentOnFrom?: string;
    /**
     * An optional note that will be shown on the credit history of the recipient's account.
     *
     * @remarks
     * The maximum length of the comment is 100.
     *
     */
    commentOnTo?: string;
    /**
     * The amount of credits to transfer.
     *
     * @remarks
     *
     */
    credits: number;
    /**
     * The numeric user ID of the account that will receive the credits.
     *
     * @remarks
     * The ID must match the username.
     *
     */
    toUserId: number;
    /**
     * The username of the account that will receive the credits.
     *
     * @remarks
     *
     */
    toUsername: string;
}
