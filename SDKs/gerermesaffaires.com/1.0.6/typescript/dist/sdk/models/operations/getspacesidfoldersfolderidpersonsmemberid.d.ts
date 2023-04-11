import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdFoldersFolderIdPersonsMemberIdRequest extends SpeakeasyBase {
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
export declare class GetSpacesIdFoldersFolderIdPersonsMemberId200ApplicationJSON extends SpeakeasyBase {
    active?: string;
    isAdmin?: string;
    memberId?: string;
    name?: string;
    role?: string;
}
export declare class GetSpacesIdFoldersFolderIdPersonsMemberIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * the access of a person to a customer contract folder
     */
    getSpacesIdFoldersFolderIdPersonsMemberId200ApplicationJSONObjects?: GetSpacesIdFoldersFolderIdPersonsMemberId200ApplicationJSON[];
}
