import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsDatapoint } from "./applicationsdatapoint";
export declare class ApplicationsSeries extends SpeakeasyBase {
    /**
     * Collection of samples with time and value.
     */
    datapoints?: ApplicationsDatapoint[];
    /**
     * Target to which to datapoints apply.
     */
    target?: string;
}
