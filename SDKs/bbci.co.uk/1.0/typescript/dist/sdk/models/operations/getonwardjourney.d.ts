import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOnwardJourneyRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The programme identifier.
     */
    pid: string;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class GetOnwardJourneyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
