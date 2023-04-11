import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdPersonsPersonIdDetailsDesignationRequest extends SpeakeasyBase {
    /**
     * designation
     */
    designation: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person or memberId
     */
    personId: string;
}
export declare class DeleteSpacesIdPersonsPersonIdDetailsDesignationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
