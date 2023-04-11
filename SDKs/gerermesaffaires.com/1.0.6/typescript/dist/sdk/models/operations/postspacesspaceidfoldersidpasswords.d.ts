import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPasswordsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * Password to write
 */
export declare class PostSpacesSpaceIdFoldersIdPasswordsRequestBody extends SpeakeasyBase {
    comment?: string;
    designation: string;
    ident?: string;
    link?: string;
    password?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPasswordsRequest extends SpeakeasyBase {
    /**
     * Password to write
     */
    requestBody: PostSpacesSpaceIdFoldersIdPasswordsRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PostSpacesSpaceIdFoldersIdPasswordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
