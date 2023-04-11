import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdBanksRequest extends SpeakeasyBase {
    /**
     * Id of the legal-entity
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdBanksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of bank folders
     */
    getSpacesSpaceIdLegalEntitiesIdBanks200ApplicationJSONAllOfs?: shared.Bank[];
}
