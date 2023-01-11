import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddShareHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class AddShareAddShareRequestBodyRecipients extends SpeakeasyBase {
    email?: string;
    type?: string;
}
export declare enum AddShareAddShareRequestBodyTypeEnum {
    SharedFolder = "shared_folder",
    Receive = "receive",
    Send = "send"
}
export declare class AddShareAddShareRequestBody extends SpeakeasyBase {
    accessMode?: shared.AccessMode;
    embed?: boolean;
    expiration?: Date;
    fileDropCreateFolders?: boolean;
    hasNotification?: boolean;
    isPublic?: boolean;
    messageBody?: string;
    messageSubject?: string;
    name: string;
    notificationEmails?: string[];
    password?: string;
    recipients?: AddShareAddShareRequestBodyRecipients[];
    requireEmail?: boolean;
    resources?: string[];
    sendingLocalFiles?: boolean;
    type: AddShareAddShareRequestBodyTypeEnum;
}
export declare class AddShareRequest extends SpeakeasyBase {
    headers: AddShareHeaders;
    request?: AddShareAddShareRequestBody;
}
export declare class AddShareResponse extends SpeakeasyBase {
    contentType: string;
    shareResponse?: shared.ShareResponse;
    statusCode: number;
}
