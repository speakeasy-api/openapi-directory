import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdProvidersAllRequest extends SpeakeasyBase {
    /**
     * if present returns infos of the ContractingPartner too
     */
    withContractingPartner?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdProvidersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of provider folders
     */
    getSpacesSpaceIdProvidersAll200ApplicationJSONAllOfs?: shared.Provider[];
}
