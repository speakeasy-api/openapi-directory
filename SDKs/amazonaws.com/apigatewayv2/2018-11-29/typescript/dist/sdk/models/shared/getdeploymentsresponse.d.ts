import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Success
 */
export declare class GetDeploymentsResponse extends SpeakeasyBase {
    items?: Deployment[];
    nextToken?: string;
}
