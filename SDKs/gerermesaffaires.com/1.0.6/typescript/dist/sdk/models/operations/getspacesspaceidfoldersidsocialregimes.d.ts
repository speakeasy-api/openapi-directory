import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdSocialRegimesRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdSocialRegimesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A social regime folder
     */
    socialRegime?: shared.SocialRegime;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
