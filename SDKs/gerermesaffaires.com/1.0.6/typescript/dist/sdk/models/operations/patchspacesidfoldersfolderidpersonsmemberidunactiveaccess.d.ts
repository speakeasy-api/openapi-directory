import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRequest extends SpeakeasyBase {
    /**
     * id of the customer folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * memberId of the person
     */
    memberId: string;
}
export declare class PatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
