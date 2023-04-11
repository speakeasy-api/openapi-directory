import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersAllRequest extends SpeakeasyBase {
    /**
     * class of the folder
     */
    class?: string;
    /**
     * keywords attached to the folder
     */
    keywords?: string;
    /**
     * Name of the folder
     */
    name?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesSpaceIdFoldersAll200ApplicationJSONAllOfs?: shared.Folder[];
}
