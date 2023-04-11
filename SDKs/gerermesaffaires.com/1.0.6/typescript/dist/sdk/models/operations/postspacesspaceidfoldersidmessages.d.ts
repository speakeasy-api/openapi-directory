import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdMessagesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdMessagesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular"
}
export declare enum PostSpacesSpaceIdFoldersIdMessagesRequestBodyNotifyHowEnum {
    Std = "std",
    Mail = "mail",
    Sms = "sms"
}
export declare class PostSpacesSpaceIdFoldersIdMessagesRequestBodyNotify extends SpeakeasyBase {
    how?: PostSpacesSpaceIdFoldersIdMessagesRequestBodyNotifyHowEnum;
    memberIds?: string[];
}
/**
 * Message to write (except Author and ModificationAuthor). Text must be Html, tags  'audio','button','input','script','select','textarea','video' are deleted
 */
export declare class PostSpacesSpaceIdFoldersIdMessagesRequestBody extends SpeakeasyBase {
    level?: PostSpacesSpaceIdFoldersIdMessagesRequestBodyLevelEnum;
    messageDate?: string;
    notify?: PostSpacesSpaceIdFoldersIdMessagesRequestBodyNotify;
    text: string;
}
export declare class PostSpacesSpaceIdFoldersIdMessagesRequest extends SpeakeasyBase {
    /**
     * Message to write (except Author and ModificationAuthor). Text must be Html, tags  'audio','button','input','script','select','textarea','video' are deleted
     */
    requestBody: PostSpacesSpaceIdFoldersIdMessagesRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PostSpacesSpaceIdFoldersIdMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
