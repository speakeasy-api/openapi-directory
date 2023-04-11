import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular"
}
export declare enum PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyNotifyHowEnum {
    Std = "std",
    Mail = "mail",
    Sms = "sms"
}
export declare class PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyNotify extends SpeakeasyBase {
    how?: PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyNotifyHowEnum;
    memberIds?: string[];
}
/**
 * Message to modify (except Author and ModificationAuthor)
 */
export declare class PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBody extends SpeakeasyBase {
    level?: PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyLevelEnum;
    messageDate?: string;
    notify?: PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBodyNotify;
    text?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequest extends SpeakeasyBase {
    /**
     * Message to modify (except Author and ModificationAuthor)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the message
     */
    messageId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdMessagesMessageIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
