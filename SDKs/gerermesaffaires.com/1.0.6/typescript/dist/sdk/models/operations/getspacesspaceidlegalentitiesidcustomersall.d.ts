import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdCustomersAllRequest extends SpeakeasyBase {
    /**
     * Id of the customer or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdCustomersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of customer folders
     */
    getSpacesSpaceIdLegalEntitiesIdCustomersAll200ApplicationJSONAllOfs?: shared.Customer[];
}
