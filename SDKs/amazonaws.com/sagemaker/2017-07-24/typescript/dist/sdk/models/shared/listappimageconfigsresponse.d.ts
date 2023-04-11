import { SpeakeasyBase } from "../../../internal/utils";
import { AppImageConfigDetails } from "./appimageconfigdetails";
/**
 * Success
 */
export declare class ListAppImageConfigsResponse extends SpeakeasyBase {
    appImageConfigs?: AppImageConfigDetails[];
    nextToken?: string;
}
