import { SpeakeasyBase } from "../../../internal/utils";
import { CheckDetail } from "./checkdetail";
/**
 * Success
 */
export declare class ListCheckDetailsOutput extends SpeakeasyBase {
    checkDetails?: CheckDetail[];
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
}
