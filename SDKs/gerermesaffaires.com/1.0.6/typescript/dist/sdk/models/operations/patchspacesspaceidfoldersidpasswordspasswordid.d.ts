import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Password to modify
 */
export declare class PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdRequestBody extends SpeakeasyBase {
    comment?: string;
    designation?: string;
    ident?: string;
    link?: string;
    password?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest extends SpeakeasyBase {
    /**
     * Password to modify
     */
    requestBody: PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
