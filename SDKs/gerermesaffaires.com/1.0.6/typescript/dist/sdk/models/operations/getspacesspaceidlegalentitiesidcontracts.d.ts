import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdContractsRequest extends SpeakeasyBase {
    /**
     * Id of the legal entity or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdContractsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of contracts folders
     */
    getSpacesSpaceIdLegalEntitiesIdContracts200ApplicationJSONAllOfs?: shared.Contract[];
}
