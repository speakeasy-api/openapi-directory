import { SpeakeasyBase } from "../../../internal/utils";
import { RunStatusEnum } from "./runstatusenum";
/**
 * Success
 */
export declare class StartRunResponse extends SpeakeasyBase {
    arn?: string;
    id?: string;
    status?: RunStatusEnum;
    tags?: Record<string, string>;
}
