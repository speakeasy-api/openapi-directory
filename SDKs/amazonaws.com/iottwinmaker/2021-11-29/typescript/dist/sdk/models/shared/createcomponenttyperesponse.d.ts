import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
/**
 * Success
 */
export declare class CreateComponentTypeResponse extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    state: StateEnum;
}
