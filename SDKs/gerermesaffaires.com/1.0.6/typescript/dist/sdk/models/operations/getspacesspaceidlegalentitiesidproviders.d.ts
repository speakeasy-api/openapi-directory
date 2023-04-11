import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdProvidersRequest extends SpeakeasyBase {
    /**
     * Id of the provider or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdProvidersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of provider folders
     */
    getSpacesSpaceIdLegalEntitiesIdProviders200ApplicationJSONAllOfs?: shared.Provider[];
}
