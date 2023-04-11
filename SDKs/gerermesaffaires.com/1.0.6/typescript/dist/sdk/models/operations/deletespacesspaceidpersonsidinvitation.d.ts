import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdPersonsIdInvitationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteSpacesSpaceIdPersonsIdInvitationRequest extends SpeakeasyBase {
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteSpacesSpaceIdPersonsIdInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
