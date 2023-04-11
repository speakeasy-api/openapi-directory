import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdCommonFoldersRequest extends SpeakeasyBase {
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
export declare class GetSpacesSpaceIdFoldersIdCommonFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesSpaceIdFoldersIdCommonFolders200ApplicationJSONAllOfs?: shared.Folder[];
}
