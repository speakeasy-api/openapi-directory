import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdLegalEntityRequest extends SpeakeasyBase {
    /**
     * Id of the folder (followup)
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdLegalEntity200ApplicationJSONClassEnum {
    CompanyEntity = "CompanyEntity",
    Person = "Person"
}
/**
 * legal entity of the folder
 */
export declare class GetSpacesSpaceIdFoldersIdLegalEntity200ApplicationJSON extends SpeakeasyBase {
    class?: GetSpacesSpaceIdFoldersIdLegalEntity200ApplicationJSONClassEnum;
    id?: string;
}
export declare class GetSpacesSpaceIdFoldersIdLegalEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * legal entity of the folder
     */
    getSpacesSpaceIdFoldersIdLegalEntity200ApplicationJSONObject?: GetSpacesSpaceIdFoldersIdLegalEntity200ApplicationJSON;
}
