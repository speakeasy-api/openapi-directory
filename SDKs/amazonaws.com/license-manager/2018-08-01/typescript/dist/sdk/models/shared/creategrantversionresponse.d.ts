import { SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";
/**
 * Success
 */
export declare class CreateGrantVersionResponse extends SpeakeasyBase {
    grantArn?: string;
    status?: GrantStatusEnum;
    version?: string;
}
