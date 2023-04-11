import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdSocialContractsRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder employee
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdSocialContractsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of social contracts of the folder employee
     */
    getSpacesSpaceIdFoldersIdSocialContracts200ApplicationJSONAllOfs?: shared.SocialContract[];
}
