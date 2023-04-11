import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdBanksAllRequest extends SpeakeasyBase {
    /**
     * Id of the bank
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdBanksAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of bank folders
     */
    getSpacesSpaceIdLegalEntitiesIdBanksAll200ApplicationJSONAllOfs?: shared.Bank[];
}
