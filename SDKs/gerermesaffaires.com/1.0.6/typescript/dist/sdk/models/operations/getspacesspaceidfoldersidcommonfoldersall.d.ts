import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdCommonFoldersAllRequest extends SpeakeasyBase {
    /**
     * keywords attached to the folder
     */
    keywords?: string;
    /**
     * Name of the folder
     */
    name?: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdCommonFoldersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesSpaceIdFoldersIdCommonFoldersAll200ApplicationJSONAllOfs?: shared.Folder[];
}
