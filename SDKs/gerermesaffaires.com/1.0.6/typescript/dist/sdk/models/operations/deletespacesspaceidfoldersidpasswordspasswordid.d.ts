import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest extends SpeakeasyBase {
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
export declare class DeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
