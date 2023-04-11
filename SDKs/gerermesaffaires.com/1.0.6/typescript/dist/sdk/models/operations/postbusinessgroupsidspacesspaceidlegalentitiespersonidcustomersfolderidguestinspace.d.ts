import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBodyGroupsEnum {
    Tax = "tax",
    WealthManagement = "wealth management",
    Legal = "legal"
}
export declare enum PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBodyRoleEnum {
    Collaborator = "collaborator",
    Manager = "manager"
}
/**
 * role and groups to apply to the managed private space
 */
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBody extends SpeakeasyBase {
    groups?: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBodyGroupsEnum;
    role: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBodyRoleEnum;
}
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequest extends SpeakeasyBase {
    /**
     * role and groups to apply to the managed private space
     */
    requestBody: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequestBody;
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
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of space created
     */
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace201ApplicationJSONObject?: PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace201ApplicationJSON;
}
