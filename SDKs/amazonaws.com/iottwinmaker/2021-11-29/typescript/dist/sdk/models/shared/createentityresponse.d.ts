import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
/**
 * Success
 */
export declare class CreateEntityResponse extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    entityId: string;
    state: StateEnum;
}
