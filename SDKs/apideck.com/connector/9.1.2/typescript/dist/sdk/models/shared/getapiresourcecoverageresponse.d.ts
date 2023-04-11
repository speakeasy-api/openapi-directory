import { SpeakeasyBase } from "../../../internal/utils";
import { ApiResourceCoverage } from "./apiresourcecoverage";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * ApiResources
 */
export declare class GetApiResourceCoverageResponse extends SpeakeasyBase {
    data: ApiResourceCoverage;
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
