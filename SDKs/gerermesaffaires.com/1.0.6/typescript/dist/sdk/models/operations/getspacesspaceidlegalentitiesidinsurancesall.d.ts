import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdInsurancesAllRequest extends SpeakeasyBase {
    /**
     * Id of the insurance
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdInsurancesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of insurance folders
     */
    getSpacesSpaceIdLegalEntitiesIdInsurancesAll200ApplicationJSONAllOfs?: shared.Insurance[];
}
