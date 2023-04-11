import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdInsurancesRequest extends SpeakeasyBase {
    /**
     * Id of the insurance
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdInsurancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of insurance folders
     */
    getSpacesSpaceIdLegalEntitiesIdInsurances200ApplicationJSONAllOfs?: shared.Insurance[];
}
