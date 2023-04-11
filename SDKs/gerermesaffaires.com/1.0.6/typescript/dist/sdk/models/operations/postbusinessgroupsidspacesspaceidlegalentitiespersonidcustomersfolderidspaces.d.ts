import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBodyLogo extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBodyTypeEnum {
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
/**
 * Space to add (except private)
 */
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBody extends SpeakeasyBase {
    logo?: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBodyLogo;
    name?: string;
    templateSpaceId?: string;
    type: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBodyTypeEnum;
}
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequest extends SpeakeasyBase {
    /**
     * Space to add (except private)
     */
    requestBody: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequestBody;
    /**
     * Id of the folder customer
     */
    folderId: string;
    /**
     * Id of the group
     */
    id: string;
    /**
     * Id of the person customer
     */
    personId: string;
    /**
     * Id of the company space which contains the customer folder
     */
    spaceId: string;
}
/**
 * Id of space created
 */
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of space created
     */
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces201ApplicationJSONObject?: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces201ApplicationJSON;
}
