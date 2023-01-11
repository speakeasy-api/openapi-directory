import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateShareByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateShareByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class UpdateShareByIdUpdateShareRequestBodyRecipients extends SpeakeasyBase {
    email?: string;
    type?: string;
}
export declare class UpdateShareByIdUpdateShareRequestBody extends SpeakeasyBase {
    accessMode?: shared.AccessMode;
    embed?: boolean;
    expiration?: Date;
    fileDropCreateFolders?: boolean;
    hasNotification?: boolean;
    isPublic?: boolean;
    messageBody?: string;
    messageSubject?: string;
    name?: string;
    notificationEmails?: string[];
    password?: string;
    recipients?: UpdateShareByIdUpdateShareRequestBodyRecipients[];
    requireEmail?: boolean;
    resources?: string[];
    status?: number;
}
export declare class UpdateShareByIdRequest extends SpeakeasyBase {
    pathParams: UpdateShareByIdPathParams;
    headers: UpdateShareByIdHeaders;
    request: UpdateShareByIdUpdateShareRequestBody;
}
export declare class UpdateShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    shareResponse?: shared.ShareResponse;
    statusCode: number;
}
