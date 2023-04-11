import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdSocialDeclarationsRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder socialregime
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdSocialDeclarationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of social declarations
     */
    getSpacesSpaceIdFoldersIdSocialDeclarations200ApplicationJSONAllOfs?: shared.SocialDeclaration[];
}
