import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdMessagesMessageIdRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the mesage
     */
    messageId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdMessagesMessageId200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular"
}
/**
 * A message
 */
export declare class GetSpacesSpaceIdFoldersIdMessagesMessageId200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    id?: string;
    level?: GetSpacesSpaceIdFoldersIdMessagesMessageId200ApplicationJSONLevelEnum;
    messageDate?: string;
    modificationAuthor?: string;
    modificationDate?: string;
    text?: string;
}
export declare class GetSpacesSpaceIdFoldersIdMessagesMessageIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A message
     */
    getSpacesSpaceIdFoldersIdMessagesMessageId200ApplicationJSONObject?: GetSpacesSpaceIdFoldersIdMessagesMessageId200ApplicationJSON;
}
