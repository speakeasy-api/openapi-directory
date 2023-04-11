import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdPersonsIdFollowUpsRequest extends SpeakeasyBase {
    /**
     * Id of the person or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdPersonsIdFollowUpsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * the folder of a person
     */
    followUp?: shared.FollowUp;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
