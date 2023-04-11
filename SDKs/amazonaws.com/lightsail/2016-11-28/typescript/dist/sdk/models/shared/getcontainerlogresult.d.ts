import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceLogEvent } from "./containerservicelogevent";
/**
 * Success
 */
export declare class GetContainerLogResult extends SpeakeasyBase {
    logEvents?: ContainerServiceLogEvent[];
    nextPageToken?: string;
}
