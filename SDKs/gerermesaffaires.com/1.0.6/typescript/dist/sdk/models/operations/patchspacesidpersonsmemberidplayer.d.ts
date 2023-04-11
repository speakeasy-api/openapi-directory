import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesIdPersonsMemberIdPlayerRequestBodyClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum PatchSpacesIdPersonsMemberIdPlayerRequestBodyPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Person to modify
 */
export declare class PatchSpacesIdPersonsMemberIdPlayerRequestBody extends SpeakeasyBase {
    clientManagement?: PatchSpacesIdPersonsMemberIdPlayerRequestBodyClientManagementEnum;
    isAdmin?: boolean;
    player: PatchSpacesIdPersonsMemberIdPlayerRequestBodyPlayerEnum;
    playerEnd?: string;
}
export declare class PatchSpacesIdPersonsMemberIdPlayerRequest extends SpeakeasyBase {
    /**
     * Person to modify
     */
    requestBody: PatchSpacesIdPersonsMemberIdPlayerRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * memberId of the person
     */
    memberId: string;
}
export declare class PatchSpacesIdPersonsMemberIdPlayerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
