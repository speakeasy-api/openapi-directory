import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Success
 */
export declare class GetOperationsResult extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
