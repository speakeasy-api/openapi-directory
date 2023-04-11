import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdPersonsPersonIdFoldersRequest extends SpeakeasyBase {
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to get folders
     */
    personId: string;
}
export declare class GetSpacesIdPersonsPersonIdFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesIdPersonsPersonIdFolders200ApplicationJSONAllOfs?: shared.Folder[];
}
