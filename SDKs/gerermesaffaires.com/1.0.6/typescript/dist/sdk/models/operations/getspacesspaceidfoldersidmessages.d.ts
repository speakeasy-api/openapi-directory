import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdMessagesRequest extends SpeakeasyBase {
    /**
     * date of the message
     */
    messageDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Name of the message
     */
    text?: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of messages
     */
    getSpacesSpaceIdFoldersIdMessages200ApplicationJSONAllOfs?: shared.Message[];
}
