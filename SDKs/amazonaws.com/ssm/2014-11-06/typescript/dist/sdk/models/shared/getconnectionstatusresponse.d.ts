import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
/**
 * Success
 */
export declare class GetConnectionStatusResponse extends SpeakeasyBase {
    status?: ConnectionStatusEnum;
    target?: string;
}
