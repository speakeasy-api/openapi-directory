import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdCompanyEntitiesIdFollowUpsRequest extends SpeakeasyBase {
    /**
     * Id of the company entity
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdCompanyEntitiesIdFollowUpsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of folders
     */
    getSpacesSpaceIdCompanyEntitiesIdFollowUps200ApplicationJSONAllOfs?: shared.Folder[];
}
