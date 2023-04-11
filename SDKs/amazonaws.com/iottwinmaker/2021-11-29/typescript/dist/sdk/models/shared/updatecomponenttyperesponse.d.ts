import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
/**
 * Success
 */
export declare class UpdateComponentTypeResponse extends SpeakeasyBase {
    arn: string;
    componentTypeId: string;
    state: StateEnum;
    workspaceId: string;
}
