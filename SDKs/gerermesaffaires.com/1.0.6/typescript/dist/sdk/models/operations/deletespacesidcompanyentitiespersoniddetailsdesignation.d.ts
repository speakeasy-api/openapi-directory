import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRequest extends SpeakeasyBase {
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
export declare class DeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
