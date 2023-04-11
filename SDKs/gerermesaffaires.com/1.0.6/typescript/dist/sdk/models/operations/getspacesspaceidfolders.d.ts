import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * only root folders
 */
export declare enum GetSpacesSpaceIdFoldersRootFoldersEnum {
    All = "all"
}
export declare class GetSpacesSpaceIdFoldersRequest extends SpeakeasyBase {
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
     * only root folders
     */
    rootFolders?: GetSpacesSpaceIdFoldersRootFoldersEnum;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesSpaceIdFolders200ApplicationJSONAllOfs?: shared.Folder[];
}
