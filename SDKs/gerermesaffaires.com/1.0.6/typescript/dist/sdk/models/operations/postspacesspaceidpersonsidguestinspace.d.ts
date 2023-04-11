import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdPersonsIdGuestInSpaceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdPersonsIdGuestInSpaceRequest extends SpeakeasyBase {
    /**
     * Infos to invite
     */
    guestInSpace: shared.GuestInSpace;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PostSpacesSpaceIdPersonsIdGuestInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
