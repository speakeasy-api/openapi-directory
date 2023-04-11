import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdPasswordsRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdPasswords200ApplicationJSON extends SpeakeasyBase {
    comment?: string;
    designation?: string;
    id?: string;
    ident?: string;
    link?: string;
    password?: string;
}
export declare class GetSpacesSpaceIdFoldersIdPasswordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of passwords
     */
    getSpacesSpaceIdFoldersIdPasswords200ApplicationJSONAnies?: GetSpacesSpaceIdFoldersIdPasswords200ApplicationJSON[];
}
