import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLegalEntitiesIdLoansAllRequest extends SpeakeasyBase {
    /**
     * Id of the loan
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLegalEntitiesIdLoansAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of loan folders
     */
    getSpacesSpaceIdLegalEntitiesIdLoansAll200ApplicationJSONAllOfs?: shared.Loan[];
}
