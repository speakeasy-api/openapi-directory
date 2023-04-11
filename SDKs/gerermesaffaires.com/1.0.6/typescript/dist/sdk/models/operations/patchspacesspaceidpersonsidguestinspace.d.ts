import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchSpacesSpaceIdPersonsIdGuestInSpaceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchSpacesSpaceIdPersonsIdGuestInSpaceRequest extends SpeakeasyBase {
    /**
     * Infos to invite
     */
    modifyInvitation: shared.ModifyInvitation;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdPersonsIdGuestInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
