import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRequest extends SpeakeasyBase {
    /**
     * PersonId (if exist)of the person in the customer space
     */
    invitationPerson: shared.InvitationPerson;
    /**
     * Id of the folder customer
     */
    folderId: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to invite to his space
     */
    personId: string;
}
export declare class PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
