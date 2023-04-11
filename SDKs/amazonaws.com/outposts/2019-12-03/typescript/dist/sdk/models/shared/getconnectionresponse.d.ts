import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionDetails } from "./connectiondetails";
/**
 * Success
 */
export declare class GetConnectionResponse extends SpeakeasyBase {
    connectionDetails?: ConnectionDetails;
    connectionId?: string;
}
