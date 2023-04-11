import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdPersonsIdGuestInSpaceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteSpacesSpaceIdPersonsIdGuestInSpaceRequest extends SpeakeasyBase {
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteSpacesSpaceIdPersonsIdGuestInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
