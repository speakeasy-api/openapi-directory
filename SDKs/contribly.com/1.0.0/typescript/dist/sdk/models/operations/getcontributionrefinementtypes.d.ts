import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContributionRefinementTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of refinement types. These are the possible values of the get contribution refinements parameter.
     */
    getContributionRefinementTypes200ApplicationJSONStrings?: string[];
}
