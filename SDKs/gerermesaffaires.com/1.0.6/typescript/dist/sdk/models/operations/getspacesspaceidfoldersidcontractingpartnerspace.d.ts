import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdContractingPartnerSpaceRequest extends SpeakeasyBase {
    /**
     * Id of the folder (contract)
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdContractingPartnerSpace200ApplicationJSONClassEnum {
    CompanyEntity = "CompanyEntity",
    Person = "Person"
}
export declare class GetSpacesSpaceIdFoldersIdContractingPartnerSpace200ApplicationJSON extends SpeakeasyBase {
    class?: GetSpacesSpaceIdFoldersIdContractingPartnerSpace200ApplicationJSONClassEnum;
    id?: string;
    role?: string;
}
export declare class GetSpacesSpaceIdFoldersIdContractingPartnerSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of contracting partners
     */
    getSpacesSpaceIdFoldersIdContractingPartnerSpace200ApplicationJSONObjects?: GetSpacesSpaceIdFoldersIdContractingPartnerSpace200ApplicationJSON[];
}
