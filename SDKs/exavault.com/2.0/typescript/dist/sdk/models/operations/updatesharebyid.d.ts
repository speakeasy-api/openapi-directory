import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateShareByIdUpdateShareRequestBodyRecipients extends SpeakeasyBase {
    /**
     * Email address of person you are inviting to the share
     */
    email?: string;
    /**
     * What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**
     */
    type?: string;
}
export declare class UpdateShareByIdUpdateShareRequestBody extends SpeakeasyBase {
    /**
     * An object defining what a not-logged-in visitor can do with the share contents
     */
    accessMode?: shared.AccessMode;
    /**
     * Whether the share can be embedded in another web page.
     */
    embed?: boolean;
    /**
     * New expiration date and time for the share
     */
    expiration?: Date;
    /**
     * Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings)
     */
    fileDropCreateFolders?: boolean;
    /**
     * Whether delivery receipts should be sent for this share.
     */
    hasNotification?: boolean;
    /**
     * Whether people can visit the share without following a link from an invitation email
     */
    isPublic?: boolean;
    /**
     * Message content to use for emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `subject`
     */
    messageBody?: string;
    /**
     * Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`
     */
    messageSubject?: string;
    /**
     * Name of the share.
     */
    name?: string;
    /**
     * List of email addresses to send delivery receipts to. Ignored if `hasNotification` is false.
     */
    notificationEmails?: string[];
    /**
     * New password for the share. To leave the password unchanged, do not send this parameter.
     */
    password?: string;
    /**
     * People you want to invite to the share.
     *
     * @remarks
     *
     * **Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.
     *
     * **Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share.
     */
    recipients?: UpdateShareByIdUpdateShareRequestBodyRecipients[];
    /**
     * Whether visitors to the share will be required to enter their email in order to access the share.
     */
    requireEmail?: boolean;
    /**
     * Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.
     *
     * @remarks
     *
     * **shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.
     *
     * **send** shares may have multiple `resource` parameters.
     *
     * **NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request.
     */
    resources?: string[];
    /**
     * New status for the share. You can set an active share to inactive by setting the status to **0**
     */
    status?: number;
}
export declare class UpdateShareByIdRequest extends SpeakeasyBase {
    requestBody: UpdateShareByIdUpdateShareRequestBody;
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * ID of the share entry
     */
    id: number;
}
export declare class UpdateShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareResponse?: shared.ShareResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
