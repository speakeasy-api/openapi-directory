import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * content of invitation message to send
 */
export declare class PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendRequestBody extends SpeakeasyBase {
    contact?: string;
    message?: string;
    signature?: string;
    subject?: string;
}
export declare class PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendRequest extends SpeakeasyBase {
    /**
     * content of invitation message to send
     */
    requestBody: PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendRequestBody;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the invitation
     */
    invitationId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdPersonsIdInvitationInvitationIdSend201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdPersonsIdInvitationInvitationIdSend201ApplicationJSONObject?: PostSpacesSpaceIdPersonsIdInvitationInvitationIdSend201ApplicationJSON;
}
