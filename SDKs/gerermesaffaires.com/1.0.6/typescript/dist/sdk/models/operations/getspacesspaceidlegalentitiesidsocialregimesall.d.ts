import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRequest extends SpeakeasyBase {
    /**
     * Id of the legal entity or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of social regime folders
     */
    getSpacesSpaceIdLegalEntitiesIdSocialRegimesAll200ApplicationJSONAllOfs?: shared.SocialRegime[];
}
