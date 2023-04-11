import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdPersonsPersonIdRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to modify or memberId
     */
    personId: string;
}
export declare class DeleteSpacesIdPersonsPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
