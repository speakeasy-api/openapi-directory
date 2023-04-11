import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the password
     */
    passwordId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * A password
 */
export declare class GetSpacesSpaceIdFoldersIdPasswordsPasswordId200ApplicationJSON extends SpeakeasyBase {
    comment?: string;
    designation?: string;
    id?: string;
    ident?: string;
    link?: string;
    password?: string;
}
export declare class GetSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A password
     */
    getSpacesSpaceIdFoldersIdPasswordsPasswordId200ApplicationJSONObject?: GetSpacesSpaceIdFoldersIdPasswordsPasswordId200ApplicationJSON;
}
