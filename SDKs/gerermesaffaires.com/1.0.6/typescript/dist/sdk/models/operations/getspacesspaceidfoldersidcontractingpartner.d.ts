import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdContractingPartnerRequest extends SpeakeasyBase {
    /**
     * Id of the folder (contract)
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdContractingPartner200ApplicationJSONClassEnum {
    CompanyEntity = "CompanyEntity",
    Person = "Person"
}
export declare class GetSpacesSpaceIdFoldersIdContractingPartner200ApplicationJSON extends SpeakeasyBase {
    class?: GetSpacesSpaceIdFoldersIdContractingPartner200ApplicationJSONClassEnum;
    id?: string;
    role?: string;
}
export declare class GetSpacesSpaceIdFoldersIdContractingPartnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of contracting partners
     */
    getSpacesSpaceIdFoldersIdContractingPartner200ApplicationJSONObjects?: GetSpacesSpaceIdFoldersIdContractingPartner200ApplicationJSON[];
}
