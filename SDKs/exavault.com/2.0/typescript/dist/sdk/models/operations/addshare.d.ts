import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddShareAddShareRequestBodyRecipients extends SpeakeasyBase {
    /**
     * Email address of person you are inviting to the share
     */
    email?: string;
    /**
     * What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**
     */
    type?: string;
}
/**
 * The type of share to create. See above for a description of each.
 */
export declare enum AddShareAddShareRequestBodyTypeEnum {
    SharedFolder = "shared_folder",
    Receive = "receive",
    Send = "send"
}
export declare class AddShareAddShareRequestBody extends SpeakeasyBase {
    /**
     * An object defining what a not-logged-in visitor can do with the share contents
     */
    accessMode?: shared.AccessMode;
    /**
     * Whether this share can be embedded within a web page.
     */
    embed?: boolean;
    /**
     * Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available.
     */
    expiration?: Date;
    /**
     * Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form.
     */
    fileDropCreateFolders?: boolean;
    /**
     * Whether delivery receipts should be sent.
     */
    hasNotification?: boolean;
    /**
     * Whether someone can visit the share without following a personalized recipient link.
     */
    isPublic?: boolean;
    /**
     * The message to be included in email invitations for your recipients. Ignored if you have not also provided `recipients` and `messageSubject`
     */
    messageBody?: string;
    /**
     * Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `messageBody`
     */
    messageSubject?: string;
    /**
     * A name for the share. This will be visible on the page that recipients visit.
     */
    name: string;
    /**
     * Emails that will receive delivery receipts for this share. `hasNotification` must be **true** for delivery receipts will be sent.
     */
    notificationEmails?: string[];
    /**
     * Set a password for recipients to access the share. All recipients will use the same password.
     */
    password?: string;
    /**
     * People you want to invite to the share. **Note**: unless you also set the `messageSubject` and `messageBody` for the new share, invitation emails will not be sent to these recipients.
     */
    recipients?: AddShareAddShareRequestBodyRecipients[];
    /**
     * True if recipients must provide their email to view the share.
     */
    requireEmail?: boolean;
    /**
     * Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.
     *
     * @remarks
     *
     * **shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.
     *
     * **send** shares may have multiple `resource` parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.
     *
     */
    resources?: string[];
    /**
     * Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded.
     */
    sendingLocalFiles?: boolean;
    /**
     * The type of share to create. See above for a description of each.
     */
    type: AddShareAddShareRequestBodyTypeEnum;
}
export declare class AddShareRequest extends SpeakeasyBase {
    requestBody?: AddShareAddShareRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class AddShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareResponse?: shared.ShareResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
